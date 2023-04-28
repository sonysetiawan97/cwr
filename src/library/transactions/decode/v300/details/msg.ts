import { getData } from '../../../../../database/select';
import { versionAvailable } from '../../../../../enum/version';
import { MSGV300, formMsgV300 } from '../../../../../model/Transactions/v300/details/msg';
import { Mapper } from '../../../../../model/mapper';
import { Params, Where } from '../../../../../model/model';

export const msg = async (text: string, group_name: string): Promise<MSGV300> => {
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

  let result: MSGV300 = {
    ...formMsgV300,
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
