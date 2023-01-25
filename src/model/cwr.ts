import { FileNamingV21, FileNamingV30 } from './filename';
import { ControlRecord } from './control_record';
import { TransactionV21, TransactionV300, Transactions } from './transaction';

export interface Cwr {
  file_naming: FileNamingV21 | FileNamingV30 | null;
  control_record: ControlRecord | null;
  transactions: Transactions[][];
}

export const cwrForm: Cwr = {
  file_naming: null,
  control_record: null,
  transactions: [],
};

export interface CwrEncode {
  filename: string;
  data: string;
}

export const formCwrEncode: CwrEncode = {
  filename: '',
  data: '',
};

export interface CwrEncodeData {
  control_record: ControlRecord | null;
  transactions: TransactionV21[][] | TransactionV300[][] | [];
}

export const formCwrEncodeData: CwrEncodeData = {
  control_record: null,
  transactions: [],
};
