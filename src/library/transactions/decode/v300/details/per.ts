import { getData } from '../../../../../database/select';
import { versionAvailable } from '../../../../../enum/version';
import { PERV300, formPerV300 } from '../../../../../model/Transactions/v300/details/per';
import { ACKV300, formAckV300 } from '../../../../../model/Transactions/v300/headers/ack';
import { Mapper } from '../../../../../model/mapper';
import { Params, Where } from '../../../../../model/model';

export const per = async (text: string, group_name: string): Promise<PERV300> => {
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

  let result: PERV300 = {
    ...formPerV300,
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