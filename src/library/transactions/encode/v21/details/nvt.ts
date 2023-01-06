import { transactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { NVTV21 } from '../../../../../model/Transactions/v21/details/nvt';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';

export const nvt = async (data: NVTV21): Promise<string> => {
  const group: transactionEnumV21 = transactionEnumV21.NVT;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof NVTV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
