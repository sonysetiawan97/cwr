import { joinEnum } from '../../../../enum/join';
import { TransactionEnumV21 } from '../../../../enum/transaction';
import { versionAvailable } from '../../../../enum/version';
import { CwrEncodeTransactionParent, CwrEncodeTransactions } from '../../../../model/encode/v21';
import { getDataMapperTransactionsVer21 } from '../../../fetch/get';
import { formatCheckType } from '../../../formatter';

export const encodeTransactionsVer21 = async (datas: CwrEncodeTransactions[][]): Promise<string[]> => {
  const result = await Promise.all(
    datas
      .map((data) => {
        return encodeTransactionsDetail(data, []);
      })
      .filter((item) => item),
  );

  return result.map((items) => {
    return items.join(joinEnum.LineBreak);
  });
};

export const encodeTransactionsDetail = async (data: CwrEncodeTransactions[], result: string[]): Promise<string[]> => {
  await Promise.all(
    data.map(async (item) => {
      const { parent, children } = item;
      if (parent) {
        result.push(await encodeTransactionsDetailParent(parent));
        if (children) {
          await encodeTransactionsDetail(children, result);
        }
      }
    }),
  );

  return result;
};

export const encodeTransactionsDetailParent = async (data: CwrEncodeTransactionParent): Promise<string> => {
  const { detail, tag } = data;

  const group: TransactionEnumV21 = tag as TransactionEnumV21;
  const version: versionAvailable = versionAvailable.v21;
  const stacks = await getDataMapperTransactionsVer21(version, group);

  return stacks
    .map((item) => {
      const { size, field, input_type } = item;
      const text = detail[field];
      return formatCheckType(text, size, input_type);
    })
    .join('');
};
