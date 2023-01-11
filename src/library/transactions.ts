import { versionAvailable } from '../enum/version';
import { TransactionV21, TransactionV300 } from '../model/transaction';
import { decodeTransactionsV21 } from './transactions/decode/v21';
import { decodeTransactionsV300 } from './transactions/decode/v300';

export const decodeTransactionsDetail = async (
  data: string[],
  version: string,
): Promise<TransactionV21[][] | TransactionV300[][]> => {
  const listTransactionIndex: number[] = [];
  const listTransactionString: string[][] = [];

  const headerTransaction: string[] = ['ACK'];
  headerTransaction.map((item) => {
    const regex = new RegExp(item);
    data.map((value, index) => {
      const transaction = regex.test(value);
      if (transaction) {
        listTransactionIndex.push(index);
      }
    });
  });

  listTransactionIndex.map((_, index) => {
    const [start, end] = listTransactionIndex.splice(index, 2);
    const transactionData: string[] = data.slice(start, end);
    listTransactionString.unshift(transactionData);
  });

  if (version === versionAvailable.v21) {
    return await decodeTransactionsV21(listTransactionString);
  } else if (version === versionAvailable.v300) {
    return await decodeTransactionsV300(listTransactionString);
  }

  return [];
};
