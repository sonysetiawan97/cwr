import { transactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { PWRV21 } from '../../../../../model/Transactions/v21/details/pwr';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const pwr = async (data: PWRV21): Promise<string> => {
  const group: transactionEnumV21 = transactionEnumV21.PWR;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof PWRV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
