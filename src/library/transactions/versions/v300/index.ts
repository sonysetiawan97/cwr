import { getData } from '../../../../database/select';
import { transactionEnum } from '../../../../enum/transaction';
import { versionAvailable } from '../../../../enum/version';
import { ACKV300, formAckV300 } from '../../../../model/Transactions/v300/headers/ack';
import { Mapper } from '../../../../model/mapper';
import { Params, Where } from '../../../../model/model';
import { TransactionV300, formTransactionV300 } from '../../../../model/transaction';

export const decodeTransactionsV300 = async (data: Array<Array<string>>): Promise<Array<Array<TransactionV300>>> => {
  let result: Array<Array<TransactionV300>> = [];

  await Promise.all(
    data.map(async (item) => {
      const entry: Array<TransactionV300> = await decodeTransactionV300(item);
      result.unshift(entry);
    }),
  );

  return result;
};

export const decodeTransactionV300 = async (data: Array<string>): Promise<Array<TransactionV300>> => {
  let result: Array<TransactionV300> = [];

  await Promise.all(
    data.map(async (item) => {
      let entry: TransactionV300 = { ...formTransactionV300 };
      const group: string = item.slice(0, 3);
      if (group === transactionEnum.ACK) {
        const values: ACKV300 = await decodeAckV300(item, group);
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

export const decodeAckV300 = async (text: string, group_name: string): Promise<ACKV300> => {
  const table: string = 'mapper';
  const version: string = versionAvailable.v300;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;

  let result: ACKV300 = {
    ...formAckV300,
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
