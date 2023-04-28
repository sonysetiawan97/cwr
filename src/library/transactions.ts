import { TransactionEnumV21 } from '../enum/transaction';
import { versionAvailable } from '../enum/version';
import { GRHVer21 } from '../model/control_record';
import { ParentTransactions, Transactions } from '../model/transaction';
import { decodeDetails, decodeTransactionsV21 } from './transactions/decode/v21';

export const decodeTransactionsDetail = async (data: string[], version: string): Promise<Transactions[][]> => {
  const listTransactionIndex: number[] = [];
  const listTransactionString: string[][] = [];

  const headerTransaction: string[] = ['ACK'];
  headerTransaction.map((item) => {
    const regex = new RegExp(item);
    data.map((value, index) => {
      const text = value.slice(0, 3);
      const transaction = regex.test(text);
      if (transaction) {
        listTransactionIndex.push(index);
      }
    });
  });

  if (listTransactionIndex.length === 0) {
    const headerTransactionNwrRev: string[] = ['NWR', 'REV'];
    headerTransactionNwrRev.map((item) => {
      const regex = new RegExp(item);
      data.map((value, index) => {
        const text = value.slice(0, 3);
        const transaction = regex.test(text);
        if (transaction) {
          listTransactionIndex.push(index);
        }
      });
    });
  }

  listTransactionIndex.map((_, index) => {
    const [start, end] = listTransactionIndex.slice(index, index + 2);
    const transactionData: string[] = data.slice(start, end);
    listTransactionString.unshift(transactionData);
  });

  if (version === versionAvailable.v21) {
    return await decodeTransactionsV21(listTransactionString);
  }

  return [];
};

export const decodeTransactionsDetailMultipleGroupVer21 = async (
  data: string[],
  detail: GRHVer21,
): Promise<Transactions[][]> => {
  const listTransactionIndex: number[] = [];
  const listTransactionString: string[][] = [];
  const tag: string = detail.transaction_type;
  const regex = new RegExp(tag);

  data.map((value, index) => {
    const text = value.slice(0, 3);
    const transaction = regex.test(text);
    if (transaction) {
      listTransactionIndex.push(index);
    }
  });

  listTransactionIndex.map((_, index) => {
    const [start, end] = listTransactionIndex.slice(index, index + 2);
    const transactionData: string[] = data.slice(start, end);
    listTransactionString.push(transactionData);
  });

  return await Promise.all(
    listTransactionString.map(async (items) => {
      const [parentData, ...childrens] = items;

      const parentTag: string = parentData.slice(0, 3);
      const parent: ParentTransactions = {
        tag: parentTag,
        detail: await decodeDetails(parentData, parentTag as TransactionEnumV21),
      };
      const children: Transactions[] = await Promise.all(
        childrens.map(async (d): Promise<Transactions> => {
          const childrenTag: string = d.slice(0, 3);
          const childrenDetail: ParentTransactions = {
            tag: childrenTag,
            detail: await decodeDetails(d, childrenTag as TransactionEnumV21),
          };

          return {
            parent: childrenDetail,
          };
        }),
      );

      const result: Transactions = {
        parent,
        children,
      };
      return [result];
    }),
  );
};
