import { transactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { SWRV21 } from '../../../../../model/Transactions/v21/details/swr';
import { ACKV21 } from '../../../../../model/Transactions/v21/headers/ack';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const swr = async (data: SWRV21): Promise<string> => {
  const group: transactionEnumV21 = transactionEnumV21.SWR;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof SWRV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
