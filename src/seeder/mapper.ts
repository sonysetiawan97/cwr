import { MapperSeeder } from '../model/mapper';
import { cwr21 } from './mapper_version/cwr_21';
import { cwr300 } from './mapper_version/cwr_300';

export const mapper: Array<MapperSeeder> = [...cwr21, ...cwr300];
