import { Cwr, cwrForm } from './model/cwr';
import { FileNamingV21, FileNamingV30 } from './model/filename';
import * as fs from 'fs';
import { checkVersion, decodeFileName } from './library/filename';
import { decodeGrh, decodeGrt, decodeHdr, decodeTrl } from './library/control_record/decode';
import { versionAvailable } from './enum/version';
import {
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
import { TransactionV21, TransactionV300 } from './model/transaction';

export const decoderFullPath = async (path: string): Promise<Cwr> => {
  return new Promise(async (resolve, reject) => {
    const file: string = fs.readFileSync(path, 'utf-8');

    const pathArray: string[] = path.split('/');
    const filename: string = pathArray[pathArray.length - 1];

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

      const hdr = data.shift();
      const grh = data.shift();
      const trl = data.pop();
      const grt = data.pop();

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

      const transactions: TransactionV21[][] | TransactionV300[][] = await decodeTransactionsDetail(
        data,
        version,
      );

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
