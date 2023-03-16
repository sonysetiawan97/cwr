import { versionAvailable } from '../enum/version';
import { Transactions } from '../model/transaction';
import { decodeTransactionsV21 } from './transactions/decode/v21';

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
  // else if (version === versionAvailable.v300) {
  //   return await decodeTransactionsV300(listTransactionString);
  // }

  return [];
};
