import { Cwr, cwrForm } from './model/cwr';
import { FileNamingV21, FileNamingV30 } from './model/filename';
import * as fs from 'fs';
import { checkVersion, decodeFileName } from './library/filename';
import { decodeGrh, decodeGrt, decodeHdr, decodeTrl } from './library/control_record/decode';
import { versionAvailable } from './enum/version';
import {
  TagHeaderTable,
  GRHVer21,
  GRHVer300,
  GRTVer21,
  GRTVer300,
  HDRVer21,
  HDRVer300,
  TRLVer21,
  TRLVer300,
} from './model/control_record';
import { decodeTransactionsDetail } from './library/transactions';
import { Transactions } from './model/transaction';
import { getDataHeader } from './library/fetch/get';
import { controlRecordEnum } from './enum/control_record';
import { TagHeaderEnum } from './enum/type_tag';
import { validationFileLevel } from './library/validation/file';
import { validationMessageEnum } from './enum/validation_message';
import { validationHDRLevel } from './library/validation/control_header/hdr';
import { validationGRHLevel } from './library/validation/control_header/grh';
import { validationGRTLevel } from './library/validation/control_header/grt';

export const decoderFullPath = async (path: string): Promise<Cwr> => {
  return new Promise(async (resolve, reject) => {
    const file: string = fs.readFileSync(path, 'utf-8');

    const pathArray: string[] = path.split('/');
    const filename: string = pathArray[pathArray.length - 1];

    const hdr: string = '';
    const grh: string = '';
    const grt: string = '';
    const trl: string = '';

    if (file && filename) {
      const file_naming: FileNamingV30 | FileNamingV21 | null = await decodeFileName(filename);

      if (!file_naming) {
        return reject('Invalid file format.');
      }

      const version: versionAvailable | null = checkVersion(filename);
      const data: string[] = file.split(/\r?\n/).filter((item) => item);

      if (!version) {
        return reject('Invalid version.');
      }

      const isValidFileLevel: boolean = await validationFileLevel(data);

      if (!isValidFileLevel) {
        return reject(validationMessageEnum.FILELEVEL);
      }

      const controlRecordData: TagHeaderTable[] = await getDataHeader(version, TagHeaderEnum.CONTROL_HEADER);

      controlRecordData.map(async (item) => {
        const { tag } = item;
        const index = data.findIndex((d) => {
          return d.slice(0, 3) === tag;
        });
        if (index !== null || index !== undefined) {
          const getResultFromIndex = data.splice(index, 1);
          if (getResultFromIndex) {
            const [resultData] = getResultFromIndex;
            if (tag === controlRecordEnum.HDR) {
              const isValidHdrLevel: boolean = await validationHDRLevel(resultData);
              if (!isValidHdrLevel) {
                reject(validationMessageEnum.HDRLEVEL);
              }
            } else if (tag === controlRecordEnum.GRH) {
              const isValidGrhLevel: boolean = await validationGRHLevel(resultData, data);
              if (!isValidGrhLevel) {
                reject(validationMessageEnum.GRHLEVEL);
              }
            } else if (tag === controlRecordEnum.GRT) {
              const isValidGrtLevel: boolean = await validationGRTLevel(resultData, data);
              if (!isValidGrtLevel) {
                reject(validationMessageEnum.GRTLEVEL);
              }
            } else if (tag === controlRecordEnum.TRL) {
              const isValidTrlLevel: boolean = true;
              if (!isValidTrlLevel) {
                reject(validationMessageEnum.TRLLEVEL);
              }
            }
          }
        }
      });

      if (!hdr || !grh || !trl || !grt) {
        return reject('Invalid Control Record.');
      }

      const hdrData: HDRVer21 | HDRVer300 | null = await decodeHdr(hdr, version);
      const grhData: GRHVer21 | GRHVer300 | null = await decodeGrh(grh, version);
      const grtData: GRTVer21 | GRTVer300 | null = await decodeGrt(grt, version);
      const trlData: TRLVer21 | TRLVer300 | null = await decodeTrl(trl, version);

      if (!hdrData || !grhData || !grtData || !trlData) {
        return reject('Invalid Control Record.');
      }

      const transactions: Transactions[][] = await decodeTransactionsDetail(data, version);

      const result: Cwr = {
        ...cwrForm,
        file_naming: {
          ...file_naming,
        },
        control_record: {
          hdr: { ...hdrData },
          grh: { ...grhData },
          grt: { ...grtData },
          trl: { ...trlData },
        },
        transactions: [...transactions],
      };
      return resolve(result);
    }
    return reject('File is not found.');
  });
};
