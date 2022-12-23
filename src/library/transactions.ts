import { getData } from '../database/select';
import { transactionEnum } from '../enum/transaction';
import { versionAvailable } from '../enum/version';
import { ACKV21, formAckV21 } from '../model/Transactions/v21/ack';
import { Mapper } from '../model/mapper';
import { Params, Where } from '../model/model';
import { TransactionV21, formTransactionV21 } from '../model/transaction';
import { transactionHeaderV21 } from '../seeder/mapper_version/v21/transaction_header/transaction_header';

export const decodeTransactionsDetail = async (data: Array<string>, version: string): Promise<TransactionV21[][]> => {
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
    listTransactionString.push(transactionData);
  });

  return await decodeTransactions(listTransactionString);
};

export const decodeTransactions = async (data: Array<Array<string>>): Promise<Array<Array<TransactionV21>>> => {
  let result: Array<Array<TransactionV21>> = [];

  await Promise.all(
    data.map(async (item) => {
      const entry: Array<TransactionV21> = await decodeTransaction(item);
      result.unshift(entry);
    }),
  );

  return result;
};

export const decodeTransaction = async (data: Array<string>): Promise<Array<TransactionV21>> => {
  let result: Array<TransactionV21> = [];

  await Promise.all(
    data.map(async (item) => {
      let entry: TransactionV21 = { ...formTransactionV21 };
      const group: string = item.slice(0, 3);
      if (group === transactionEnum.ACK) {
        const values: ACKV21 = await decodeAckV21(item, group);
        entry = {
          ...entry,
          group,
          values,
        };
      }
      result.unshift(entry);
    }),
  );

  return result;
};

export const decodeAckV21 = async (text: string, group_name: string): Promise<ACKV21> => {
  const table: string = 'mapper';
  const version: string = versionAvailable.v21;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;

  let result: ACKV21 = {
    ...formAckV21,
  };

  stacks.map((stack) => {
    const { field, start_char, end_char } = stack;
    const name: string = field;
    const start: number = start_char - 1;
    const end: number = end_char - 1;
    const value: string = text.slice(start, end);
    result = {
      ...result,
      [name]: value,
    };
  });

  return result;
};
