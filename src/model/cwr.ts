import { FileNamingV21, FileNamingV30 } from './filename';
import { ControlRecord } from './control_record';
import { TransactionV21 } from './transaction';

export interface cwr {
  file_naming: FileNamingV21 | FileNamingV30 | null;
  control_record: ControlRecord | null;
  transactions: Array<Array<TransactionV21>> | [];
}

export const cwrForm: cwr = {
  file_naming: null,
  control_record: null,
  transactions: [],
};
