export interface ACKV300 {
  record_prefix: string;
  creation_date: string;
  creation_time: string;
  original_group_code: string;
  original_transaction_sequence_number: string;
  original_transaction_type: string;
  creation_title?: string;
  submitter_creation_number?: string;
  recipient_creation_number?: string;
  recipient_temporary_creation_number?: string;
  processing_date: string;
  transaction_status: string;
  cwr_sub_filename: string;
}

export const formAckV300: ACKV300 = {
  record_prefix: '',
  creation_date: '',
  creation_time: '',
  original_group_code: '',
  original_transaction_sequence_number: '',
  original_transaction_type: '',
  processing_date: '',
  transaction_status: '',
  cwr_sub_filename: '',
};
