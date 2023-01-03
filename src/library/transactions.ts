import { versionAvailable } from '../enum/version';
import { TransactionV21, TransactionV300 } from '../model/transaction';
import { decodeTransactionsV21 } from './transactions/versions/v21';
import { decodeTransactionsV300 } from './transactions/versions/v300';

export const decodeTransactionsDetail = async (
  data: Array<string>,
  version: string,
): Promise<Array<Array<TransactionV21 | TransactionV300>>> => {
  const listTransactionIndex: Array<number> = [];
  const listTransactionString: Array<Array<string>> = [];

  const headerTransaction: Array<string> = ['ACK'];
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
    const transactionData: Array<string> = data.slice(start, end);
    listTransactionString.unshift(transactionData);
  });

  if (version === versionAvailable.v21) {
    return await decodeTransactionsV21(listTransactionString);
  } else if (version === versionAvailable.v300) {
    return await decodeTransactionsV300(listTransactionString);
  }

  return [];
};
