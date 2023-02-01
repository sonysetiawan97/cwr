import { TransactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { MSGV21 } from '../../../../../model/Transactions/v21/details/msg';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const msg = async (data: MSGV21): Promise<string> => {
  const group: TransactionEnumV21 = TransactionEnumV21.MSG;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof MSGV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
