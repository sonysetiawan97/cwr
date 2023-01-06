import { transactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { TERV21 } from '../../../../../model/Transactions/v21/details/ter';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const ter = async (data: TERV21): Promise<string> => {
  const group: transactionEnumV21 = transactionEnumV21.TER;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof TERV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
