import { joinEnum } from './enum/join';
import { versionAvailable } from './enum/version';
import { encodeControlRecordVer21 } from './library/control_record/encode/v21';
import { encodeFileName } from './library/filename';
import { encodeTransactionsVer21 } from './library/transactions/encode/v21';
import { CwrEncode, CwrEncodeData, formCwrEncode } from './model/cwr';
import { EncodeFileNamingV21 } from './model/filename';
import { TransactionV21 } from './model/transaction';

export const encodeCwr = async (filenameData: EncodeFileNamingV21, data: CwrEncodeData): Promise<CwrEncode> => {
  return new Promise(async (resolve, reject) => {
    const { version } = filenameData;
    let result: CwrEncode = { ...formCwrEncode };
    if (version === versionAvailable.v21) {
      const control_record = data.control_record;
      const transactions = data.transactions as Array<Array<TransactionV21>>;
      if (control_record) {
        const filename: string | null = encodeFileName(filenameData);
        const resultControlRecord: Array<string> = await encodeControlRecordVer21(control_record);
        const resultTransactions: Array<string> = await encodeTransactionsVer21(transactions);
        const finalResult: Array<string> = [...resultControlRecord];

        finalResult.splice(2, 0, ...resultTransactions);

        const finalData: string = finalResult.join(joinEnum.LineBreak);

        console.log(finalData);

        if (filename) {
          result = {
            ...result,
            filename,
            data: finalData,
          };

          return resolve(result);
        }
        return reject('Invalid Control Record');
      }

      return reject('Invalid Version');
    } else if (version === versionAvailable.v300) {
      return resolve(result);
    }
    return reject('Invalid Version');
  });
};
