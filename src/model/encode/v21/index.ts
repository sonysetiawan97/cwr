import { CwrEncodeControlHeader } from './control_header';
import { CwrEncodeFilename } from './filename';

export interface CWREncode {
  filename: CwrEncodeFilename;
  controlHeader: CwrEncodeControlHeader;
  transactions: CwrEncodeTransactions[][];
}

export interface CWREncodeResult {
  filename: string;
  data: string;
}

export const CwrEncodeResultForm: CWREncodeResult = {
  filename: '',
  data: '',
};

export interface CwrEncodeTransactionDetail {
  [key: string]: string | number | boolean;
}

export interface CwrEncodeTransactionParent {
  tag: string;
  detail: CwrEncodeTransactionDetail;
}

export interface CwrEncodeTransactions {
  parent?: CwrEncodeTransactionParent;
  children?: CwrEncodeTransactions[];
}
