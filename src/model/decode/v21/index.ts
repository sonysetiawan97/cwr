import { versionAvailable } from '../../../enum/version';
import { HDRVer21, TRLVer21 } from '../../control_record';
import { GRHDecodeWithTransaction } from '../../decode/v21/control_header';
import { FileNamingV21 } from '../../filename';

export interface CWRDecodeModel {
  hdr: string;
  group: string[];
  trl: string;
}

export interface CWRDecodeTransactionResultModel {
  hdr: HDRVer21;
  group: GRHDecodeWithTransaction[];
  trl: TRLVer21;
}

export interface CwrDecodeTransactionDetail {
  [key: string]: string | number | boolean;
}

export interface CwrDecodeTransactionParent {
  tag: string;
  detail: CwrDecodeTransactionDetail;
}

export interface CwrDecodeTransactions {
  parent?: CwrDecodeTransactionParent;
  children?: CwrDecodeTransactions[];
}

export interface CWRDecodeResultModel {
  filename: FileNamingV21;
  transactions: CWRDecodeTransactionResultModel;
}

export const initialValueCWRDecodeResult: CWRDecodeResultModel = {
  filename: {
    identity: '',
    year: '',
    sequence: '',
    society: '',
    receiver: '',
    version: versionAvailable.v21,
  },
  transactions: {
    hdr: {
      record_type: '',
      sender_type: '',
      sender_id: '',
      sender_name: '',
      edi_standard_version_number: '',
      creation_date: '',
      creation_time: '',
      transmission_date: '',
    },
    group: [],
    trl: {
      record_type: '',
      group_id: '',
      transaction_count: '',
      record_count: '',
    },
  },
};
