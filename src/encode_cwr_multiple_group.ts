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
        let groupCount = 0;
        let transactionCountLine = 0;

        const { hdr, group } = transactions;

        const hdrResult: string = await encodeHDRVer21(hdr);
        const groupResult: Promise<string[]> = Promise.all(
          group.map(async (entry) => {
            const resultGroup: string[] = [];
            const { detail, transaction } = entry;
            const grhResult: string = await encodeGRHVer21(detail);
            resultGroup.push(grhResult);
            transactionCountLine++;

            const transactionsResult: string[] = await encodeTransactionsVer21(transaction);
            transactionsResult.map((res) => {
              resultGroup.push(res);
              transactionCountLine++;
            });

            groupCount = resultGroup.length;
            transactionCountLine = transactionsResult.length;

            const grtResult: string = await encodeGRTVerBasedOnGRH(detail, groupCount, transactionCountLine + 1);
            resultGroup.push(grtResult);
            return resultGroup.join(joinEnum.LineBreak);
          }),
        );

        const finalResult: string[] = [hdrResult, ...(await groupResult)];

        const trlResult: string = await encodeTRLVerBasedOnGRH(groupCount, groupCount, finalResult.length + 1);

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
