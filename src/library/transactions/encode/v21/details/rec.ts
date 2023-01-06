import { transactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { RECV21 } from '../../../../../model/Transactions/v21/details/rec';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const rec = async (data: RECV21): Promise<string> => {
  const group: transactionEnumV21 = transactionEnumV21.REC;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof RECV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
