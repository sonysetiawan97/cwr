import { TransactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { SPTV21 } from '../../../../../model/Transactions/v21/details/spt';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const spt = async (data: SPTV21): Promise<string> => {
  const group: TransactionEnumV21 = TransactionEnumV21.SPT;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof SPTV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
