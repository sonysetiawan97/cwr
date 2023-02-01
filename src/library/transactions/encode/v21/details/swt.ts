import { TransactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { SWTV21 } from '../../../../../model/Transactions/v21/details/swt';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const swt = async (data: SWTV21): Promise<string> => {
  const group: TransactionEnumV21 = TransactionEnumV21.SWT;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof SWTV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
