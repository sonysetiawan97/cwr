import { transactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { SPUV21 } from '../../../../../model/Transactions/v21/details/spu';
import { ACKV21 } from '../../../../../model/Transactions/v21/headers/ack';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const spu = async (data: SPUV21): Promise<string> => {
  const group: transactionEnumV21 = transactionEnumV21.SPU;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof SPUV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
