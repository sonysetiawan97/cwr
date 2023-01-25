export interface TagHeaderTable {
  version: string;
  type: string;
  tag: string;
}

export interface ControlRecord {
  hdr: HDRVer21 | HDRVer300;
  grh: GRHVer21 | GRHVer300;
  grt: GRTVer21 | GRHVer300;
  trl: TRLVer21 | GRHVer300;
}

export interface HDRVer21 {
  record_type: string;
  sender_type: string;
  sender_id: string;
  sender_name: string;
  edi_standard_version_number: string;
  creation_date: string;
  creation_time: string;
  transmission_date: string;
  character_set?: string;
}

export interface GRHVer21 {
  record_type: string;
  transaction_type: string;
  type_group_id: string;
  version_number_for_this_transaction_type: string;
  batch_request: string;
  submission_or_distribution_type: string;
}

export interface GRTVer21 {
  record_type: string;
  group_id: string;
  transaction_count: string;
  record_count: string;
}

export interface TRLVer21 {
  record_type: string;
  group_id: string;
  transaction_count: string;
  record_count: string;
}

export interface HDRVer300 {
  record_type: string;
  sender_type: string;
  sender_id: string;
  sender_name: string;
  edi_standard_version_number: string;
  creation_date: string;
  creation_time: string;
  transmission_date: string;
  character_set?: string;
}

export interface GRHVer300 {
  record_type: string;
  transaction_type: string;
  type_group_id: string;
  version_number_for_this_transaction_type: string;
  batch_request: string;
  submission_or_distribution_type: string;
}

export interface GRTVer300 {
  record_type: string;
  group_id: string;
  transaction_count: string;
  record_count: string;
}

export interface TRLVer300 {
  record_type: string;
  group_id: string;
  transaction_count: string;
  record_count: string;
}

export const FormHDRVer21 = {
  record_type: '',
  sender_type: '',
  sender_id: '',
  sender_name: '',
  edi_standard_version_number: '',
  creation_date: '',
  creation_time: '',
  transmission_date: '',
  character_set: '',
};

export const FormGRHVer21 = {
  record_type: '',
  transaction_type: '',
  type_group_id: '',
  version_number_for_this_transaction_type: '',
  batch_request: '',
  submission_or_distribution_type: '',
};

export const FormGRTVer21 = {
  record_type: '',
  group_id: '',
  transaction_count: '',
  record_count: '',
};

export const FormTRLVer21 = {
  record_type: '',
  group_id: '',
  transaction_count: '',
  record_count: '',
};

export const FormHDRVer300 = {
  record_type: '',
  sender_type: '',
  sender_id: '',
  sender_name: '',
  edi_standard_version_number: '',
  creation_date: '',
  creation_time: '',
  transmission_date: '',
  character_set: '',
};

export const FormGRHVer300 = {
  record_type: '',
  transaction_type: '',
  type_group_id: '',
  version_number_for_this_transaction_type: '',
  batch_request: '',
  submission_or_distribution_type: '',
};

export const FormGRTVer300 = {
  record_type: '',
  group_id: '',
  transaction_count: '',
  record_count: '',
};

export const FormTRLVer300 = {
  record_type: '',
  group_id: '',
  transaction_count: '',
  record_count: '',
};
