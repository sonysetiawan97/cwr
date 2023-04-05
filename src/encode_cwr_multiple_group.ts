import { joinEnum } from './enum/join';
import { versionAvailable } from './enum/version';
import { encodeGRHVer21 } from './library/control_record/encode/v21/details/grh';
import { encodeGRTVerBasedOnGRH } from './library/control_record/encode/v21/details/grt';
import { encodeHDRVer21 } from './library/control_record/encode/v21/details/hdr';
import { encodeTRLVerBasedOnGRH } from './library/control_record/encode/v21/details/trl';
import { encodeFileName } from './library/filename';
import { encodeTransactionsVer21 } from './library/transactions/encode/v21';
import { formCwrEncode } from './model/cwr';
import { CWREncodeResult, CwrEncodeMultipleGroup } from './model/encode/v21';

export const encodeCwrMultipleGroup = async (data: CwrEncodeMultipleGroup): Promise<CWREncodeResult> => {
  return new Promise(async (resolve, reject) => {
    const { filename } = data;

    if (filename) {
      const { version } = filename;
      let result: CWREncodeResult = { ...formCwrEncode };

      if (version === versionAvailable.v21) {
        const { transactions } = data;
        const filenameResult: string = encodeFileName(filename);
        let groupCount: number = 0;
        let transcationCount: number = 0;
        let transactionCountLine: number = 0;

        const { hdr, group } = transactions;

        const hdrResult: string = await encodeHDRVer21(hdr);
        const groupResult: Promise<string[]> = Promise.all(
          group.map(async (entry) => {
            let groupTransactionCountLine: number = 0;

            const resultGroup: string[] = [];
            const { detail, transaction } = entry;
            const grhResult: string = await encodeGRHVer21(detail);
            resultGroup.push(grhResult);
            groupTransactionCountLine++;

            const transactionsResult: string[] = await encodeTransactionsVer21(transaction);
            transactionsResult.map((res) => {
              resultGroup.push(res);
              groupTransactionCountLine += res.split(joinEnum.LineBreak).length;
            });

            groupTransactionCountLine++;
            const grtResult: string = await encodeGRTVerBasedOnGRH(
              detail,
              transaction.length,
              groupTransactionCountLine,
            );
            resultGroup.push(grtResult);

            transcationCount += transaction.length;
            groupCount++;
            transactionCountLine += groupTransactionCountLine;

            return resultGroup.join(joinEnum.LineBreak);
          }),
        );

        const finalResult: string[] = [hdrResult, ...(await groupResult)];

        const trlResult: string = await encodeTRLVerBasedOnGRH(groupCount, transcationCount, transactionCountLine + 2);

        finalResult.push(trlResult);

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
