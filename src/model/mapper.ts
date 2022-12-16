import { Options } from './model';

export interface Mapper {
  id: number;
  version: string;
  group_name: string;
  input_type: string;
  is_required: boolean;
  tag: string;
  start_char: number;
  end_char: number;
  size: number;
  field: string;
  description?: string;
}

export interface MapperSeeder {
  version: string;
  group_name: string;
  input_type: string;
  is_required: boolean;
  tag: string;
  start_char: number;
  end_char: number;
  size: number;
  field: string;
  description?: string;
}
