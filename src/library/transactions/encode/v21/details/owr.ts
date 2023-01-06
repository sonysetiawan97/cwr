import { transactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { OWRV21 } from '../../../../../model/Transactions/v21/details/owr';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const owr = async (data: OWRV21): Promise<string> => {
  const group: transactionEnumV21 = transactionEnumV21.OWR;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof OWRV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
