import { getData } from '../../database/select';
import { controlRecordEnum } from '../../enum/control_record';
import { versionAvailable } from '../../enum/version';
import { transactionEnumV21 } from '../../enum/transaction';
import { Mapper } from '../../model/mapper';
import { Params, Where } from '../../model/model';
import { TagHeaderTable } from '../../model/control_record';
import { TableEnum } from '../../enum/table';
import { TagHeaderEnum } from '../../enum/type_tag';

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

export const getDataHeader = async (version: versionAvailable, type: TagHeaderEnum): Promise<TagHeaderTable[]> => {
  const table: string = TableEnum.TAG_HEADER;
  const where: Where = {
    version,
    type,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as TagHeaderTable[];
  return stacks;
};
