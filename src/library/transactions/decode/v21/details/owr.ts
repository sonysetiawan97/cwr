import { getData } from '../../../../../database/select';
import { versionAvailable } from '../../../../../enum/version';
import { formOwrV21 } from '../../../../../model/Transactions/v21/details/owr';
import { Mapper } from '../../../../../model/mapper';
import { Params, Where } from '../../../../../model/model';
import { DetailTransaction } from '../../../../../model/transaction';

export const owr = async (text: string, group_name: string): Promise<DetailTransaction> => {
  const table: string = 'mapper';
  const version: string = versionAvailable.v21;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Mapper[];

  let result: DetailTransaction = {
    ...formOwrV21,
  };

  stacks.map((stack) => {
    const { field, start_char, end_char } = stack;
    const name: string = field;
    const start: number = start_char - 1;
    const end: number = end_char - 1;
    const value: string = text.slice(start, end).trim();
    result = {
      ...result,
      [name]: value,
    };
  });

  return result;
};
