import { transactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { NPAV21 } from '../../../../../model/Transactions/v21/details/npa';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const npa = async (data: NPAV21): Promise<string> => {
  const group: transactionEnumV21 = transactionEnumV21.NPA;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof NPAV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
