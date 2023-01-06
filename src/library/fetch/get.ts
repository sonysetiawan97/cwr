import { getData } from '../../database/select';
import { controlRecordEnum } from '../../enum/control_record';
import { versionAvailable } from '../../enum/version';
import { transactionEnumV21 } from '../../enum/transaction';
import { Mapper } from '../../model/mapper';
import { Params, Where } from '../../model/model';

export const getDataMapper = async (
  version: versionAvailable,
  group_name: controlRecordEnum,
): Promise<Array<Mapper>> => {
  const table: string = 'mapper';
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;
  return stacks;
};

export const getDataMapperTransactionsVer21 = async (
  version: versionAvailable,
  group_name: transactionEnumV21,
): Promise<Array<Mapper>> => {
  const table: string = 'mapper';
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;
  return stacks;
};
