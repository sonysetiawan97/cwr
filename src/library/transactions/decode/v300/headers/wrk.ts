import { getData } from '../../../../../database/select';
import { versionAvailable } from '../../../../../enum/version';
import { WRKV300, formWrkV300 } from '../../../../../model/Transactions/v300/headers/wrk';
import { Mapper } from '../../../../../model/mapper';
import { Params, Where } from '../../../../../model/model';

export const wrk = async (text: string, group_name: string): Promise<WRKV300> => {
  const table: string = 'mapper';
  const version: string = versionAvailable.v300;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Mapper[];

  let result: WRKV300 = {
    ...formWrkV300,
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
