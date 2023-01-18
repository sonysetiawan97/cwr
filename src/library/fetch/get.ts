import { getData } from '../../database/select';
import { controlRecordEnum } from '../../enum/control_record';
import { versionAvailable } from '../../enum/version';
import { transactionEnumV21 } from '../../enum/transaction';
import { Mapper } from '../../model/mapper';
import { Params, Where } from '../../model/model';
import { ControlRecordTable } from '../../model/control_record';

export const getDataMapper = async (version: versionAvailable, group_name: controlRecordEnum): Promise<Mapper[]> => {
  const table: string = 'mapper';
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Mapper[];
  return stacks;
};

export const getDataMapperTransactionsVer21 = async (
  version: versionAvailable,
  group_name: transactionEnumV21,
): Promise<Mapper[]> => {
  const table: string = 'mapper';
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Mapper[];
  return stacks;
};

export const getDataHeader = async (version: versionAvailable): Promise<ControlRecordTable[]> => {
  const table: string = 'control_record';
  const where: Where = {
    version,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as ControlRecordTable[];
  return stacks;
};
