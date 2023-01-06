import { transactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { NCTV21 } from '../../../../../model/Transactions/v21/details/nct';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const nct = async (data: NCTV21): Promise<string> => {
  const group: transactionEnumV21 = transactionEnumV21.NCT;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof NCTV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
