import { Options } from './model';

export interface LookUp {
  id: number;
  version: string;
  line: string;
  group_name: string;
  input_type: string;
  is_required: boolean;
  tag: string;
  start_char: number;
  end_char: number;
  size: number;
  field: string;
  options?: Array<Options>;
  description?: string;
}

export interface LookUpSeeder {
  version: string;
  line: string;
  group_name: string;
  input_type: string;
  is_required: boolean;
  tag: string;
  start_char: number;
  end_char: number;
  size: number;
  field: string;
  options?: string;
  description?: string;
}
