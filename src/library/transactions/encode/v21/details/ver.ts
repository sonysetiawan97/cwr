import { TransactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { VERV21 } from '../../../../../model/Transactions/v21/details/ver';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const ver = async (data: VERV21): Promise<string> => {
  const group: TransactionEnumV21 = TransactionEnumV21.VER;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof VERV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
