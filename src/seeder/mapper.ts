import { MapperSeeder } from '../model/mapper';
import { cwr21 } from './mapper_version/cwr_21';
import { cwr300 } from './mapper_version/cwr_300';
import { detailRecordV21 } from './mapper_version/v21/detail_record/detail_record';
import { transactionHeaderV21 } from './mapper_version/v21/transaction_header/transaction_header';

export const mapper: Array<MapperSeeder> = [...cwr21, ...cwr300, ...detailRecordV21, ...transactionHeaderV21];
