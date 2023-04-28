import { CwrEncodeControlHeader, HDREncode, GRHEncodeWithTransaction } from './control_header';
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

export interface CwrEncodeControlHeaderMultipleGroup {
  hdr: HDREncode;
  group: GRHEncodeWithTransaction[];
}
export interface CwrEncodeMultipleGroup {
  filename: CwrEncodeFilename;
  transactions: CwrEncodeControlHeaderMultipleGroup;
}
