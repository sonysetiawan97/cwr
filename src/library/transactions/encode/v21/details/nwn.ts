import { TransactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { NWNV21 } from '../../../../../model/Transactions/v21/details/nwn';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const nwn = async (data: NWNV21): Promise<string> => {
  const group: TransactionEnumV21 = TransactionEnumV21.NWN;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof NWNV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
