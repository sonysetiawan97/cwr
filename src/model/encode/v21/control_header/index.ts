export interface CwrEncodeControlHeader {
  hdr: HDREncode;
  grh: GRHEncode;
  grt: GRTEncode;
  trl: TRLEncode;
}

export interface HDREncode {
  record_type: string;
  sender_type: string;
  sender_id: number;
  sender_name: string;
  edi_standard_version_number: string;
  creation_date: string;
  creation_time: string;
  transmission_date: string;
  character_set: string;
}

export interface GRHEncode {
  record_type: string;
  transaction_type: string;
  type_group_id: number;
  version_number_for_this_transaction_type: string;
  batch_request: number;
  submission_or_distribution_type: string;
}

export interface GRTEncode {
  record_type: string;
  group_id: number;
  transaction_count: number;
  record_count: number;
}

export interface TRLEncode {
  record_type: string;
  group_id: number;
  transaction_count: number;
  record_count: number;
}
