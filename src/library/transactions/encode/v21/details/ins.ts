import { TransactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { INSV21 } from '../../../../../model/Transactions/v21/details/ins';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const ins = async (data: INSV21): Promise<string> => {
  const group: TransactionEnumV21 = TransactionEnumV21.INS;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof INSV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
