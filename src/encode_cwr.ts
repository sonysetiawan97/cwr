import { joinEnum } from './enum/join';
import { versionAvailable } from './enum/version';
import { encodeControlRecordVer21 } from './library/control_record/encode/v21';
import { encodeFileName } from './library/filename';
import { encodeTransactionsVer21 } from './library/transactions/encode/v21';
import { formCwrEncode } from './model/cwr';
import { CWREncode, CWREncodeResult } from './model/encode/v21';

export const encodeCwr = async (data: CWREncode): Promise<CWREncodeResult> => {
  return new Promise(async (resolve, reject) => {
    const { filename } = data;

    if (filename) {
      const { version } = filename;
      let result: CWREncodeResult = { ...formCwrEncode };

      if (version === versionAvailable.v21) {
        const { controlHeader, transactions } = data;
        const filenameResult: string = encodeFileName(filename);
        const controlHeaderResult: string[] = await encodeControlRecordVer21(controlHeader);
        const transactionsResult: string[] = await encodeTransactionsVer21(transactions);
        const finalResult: string[] = [...controlHeaderResult];

        finalResult.splice(2, 0, ...transactionsResult);

        const finalData: string = finalResult.join(joinEnum.LineBreak);

        if (filename) {
          result = {
            ...result,
            filename: filenameResult,
            data: finalData,
          };

          return resolve(result);
        }

        return reject('Invalid Data Transaction');
      } else if (version === versionAvailable.v300) {
        return resolve(result);
      }
    }

    return reject('Invalid Version');
  });
};
