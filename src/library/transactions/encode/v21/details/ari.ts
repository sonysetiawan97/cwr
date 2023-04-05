import { TransactionEnumV21 } from '../../../../../enum/transaction';
import { versionAvailable } from '../../../../../enum/version';
import { ARIV21 } from '../../../../../model/Transactions/v21/details/ari';
import { getDataMapperTransactionsVer21 } from '../../../../fetch/get';
import { formatRecordPrefix } from '../../../../formatter/record_prefix';

export const ari = async (
  data: ARIV21,
  transactionOrder: number = 0,
  transactionLineOrder: number = 0,
): Promise<string> => {
  const group: TransactionEnumV21 = TransactionEnumV21.ARI;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  const record_prefix = formatRecordPrefix(group, transactionOrder, transactionLineOrder);

  data = {
    ...data,
    record_prefix,
  };

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof ARIV21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};
