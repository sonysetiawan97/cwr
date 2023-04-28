import { Cwr, cwrForm } from './model/cwr';
import { FileNamingV21, FileNamingV30 } from './model/filename';
import * as fs from 'fs';
import { checkVersion, decodeFileName, decodeFileNameV21 } from './library/filename';
import {
  decodeGrh,
  decodeGrhVer21,
  decodeGrt,
  decodeGrtVer21,
  decodeHdr,
  decodeHdrVer21,
  decodeTrl,
  decodeTrlVer21,
} from './library/control_record/decode';
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
import { decodeTransactionsDetail, decodeTransactionsDetailMultipleGroupVer21 } from './library/transactions';
import { Transactions } from './model/transaction';
import { getDataHeader } from './library/fetch/get';
import { controlRecordEnum } from './enum/control_record';
import { TagHeaderEnum } from './enum/type_tag';
import { validationFileLevel } from './library/validation/file';
import { validationMessageEnum } from './enum/validation_message';
import { validationHDRLevel } from './library/validation/control_header/hdr';
import { validationGRHLevel } from './library/validation/control_header/grh';
import { validationGRTLevel } from './library/validation/control_header/grt';
import { validationTRLLevel } from './library/validation/control_header/trl';
import { CWRDecodeResultModel, initialValueCWRDecodeResult } from './model/decode/v21';
import { GRHDecodeWithTransaction } from './model/decode/v21/control_header';

export const decoderFullPath = async (path: string): Promise<Cwr> => {
  return new Promise(async (resolve, reject) => {
    const file: string = fs.readFileSync(path, 'utf-8');

    const pathArray: string[] = path.split('/');
    const filename: string = pathArray[pathArray.length - 1];

    let hdr: string = '';
    let grh: string = '';
    let grt: string = '';
    let trl: string = '';

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
      const transactionData = [...data];

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
              hdr = resultData;
              const isValidHdrLevel: boolean = await validationHDRLevel(resultData);
              if (!isValidHdrLevel) {
                reject(validationMessageEnum.HDRLEVEL);
              }
            } else if (tag === controlRecordEnum.GRH) {
              grh = resultData;
              const isValidGrhLevel: boolean = await validationGRHLevel(resultData, transactionData);
              if (!isValidGrhLevel) {
                reject(validationMessageEnum.GRHLEVEL);
              }
            } else if (tag === controlRecordEnum.GRT) {
              grt = resultData;
              const isValidGrtLevel: boolean = await validationGRTLevel(resultData, transactionData);
              if (!isValidGrtLevel) {
                reject(validationMessageEnum.GRTLEVEL);
              }
            } else if (tag === controlRecordEnum.TRL) {
              trl = resultData;
              const isValidTrlLevel: boolean = await validationTRLLevel(resultData, transactionData);
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

export const decodeFullPathMultipleGroup = async (path: string): Promise<CWRDecodeResultModel> => {
  return new Promise(async (resolve, reject) => {
    const file: string = fs.readFileSync(path, 'utf-8');
    const pathArray: string[] = path.split('/');
    const filename: string = pathArray[pathArray.length - 1];

    if (file && filename) {
      let result: CWRDecodeResultModel = initialValueCWRDecodeResult;
      const file_naming: FileNamingV21 | null = await decodeFileNameV21(filename);

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

      const hdrIndexText: number = data.findIndex((d) => {
        return d.slice(0, 3) === controlRecordEnum.HDR;
      });
      const [hdrTag]: string[] = data.splice(hdrIndexText, 1);
      const hdr: HDRVer21 = await decodeHdrVer21(hdrTag);

      const trlIndexText: number = data.findIndex((d) => {
        return d.slice(0, 3) === controlRecordEnum.TRL;
      });
      const [trlTag]: string[] = data.splice(trlIndexText, 1);
      const trl: TRLVer21 = await decodeTrlVer21(trlTag);

      const indexGRH: number[] = [];
      const transactionGroup: string[][] = [];
      data.map((d, index) => {
        if (d.slice(0, 3) === controlRecordEnum.GRH) {
          indexGRH.push(index);
        }
      });

      indexGRH.reverse().map((index) => {
        transactionGroup.unshift(data.splice(index));
      });
      const group: GRHDecodeWithTransaction[] = [];

      await Promise.all(
        transactionGroup.map(async (transactionData) => {
          const grhIndexText: number = transactionData.findIndex((d) => {
            return d.slice(0, 3) === controlRecordEnum.GRH;
          });
          const [grhTag]: string[] = transactionData.splice(grhIndexText, 1);
          const detail: GRHVer21 = await decodeGrhVer21(grhTag);

          const grtIndexText: number = transactionData.findIndex((d) => {
            return d.slice(0, 3) === controlRecordEnum.GRH;
          });
          const [grtTag]: string[] = transactionData.splice(grtIndexText, 1);
          const close_detail: GRTVer21 = await decodeGrtVer21(grtTag);

          const transaction: Transactions[][] = await decodeTransactionsDetailMultipleGroupVer21(
            transactionData,
            detail,
          );

          const resultTransaction: GRHDecodeWithTransaction = {
            detail,
            transaction,
            close_detail,
          };
          group.push(resultTransaction);
        }),
      );

      const { transactions } = result;
      result = {
        ...result,
        filename: { ...file_naming },
        transactions: {
          ...transactions,
          hdr,
          trl,
          group,
        },
      };

      return resolve(result);
    }

    return reject('File is not found.');
  });
};
