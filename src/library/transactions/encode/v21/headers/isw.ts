import { TransactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { ISWV21 } from '../../../../../model/Transactions/v21/headers/isw';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const isw = async (data: ISWV21): Promise<string> => {
  const group: TransactionEnumV21 = TransactionEnumV21.ISW;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof ISWV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
