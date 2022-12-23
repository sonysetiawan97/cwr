export interface ACKV21 {
  record_prefix: string;
  creation_date: string;
  creation_time: string;
  original_group_id: string;
  original_transaction_sequence: string;
  original_transaction_type: string;
  creation_title?: string;
  submitter_creation?: string;
  recipient_creation?: string;
  processing_date: string;
  transaction_status: string;
}

export const formAckV21: ACKV21 = {
  record_prefix: '',
  creation_date: '',
  creation_time: '',
  original_group_id: '',
  original_transaction_sequence: '',
  original_transaction_type: '',
  processing_date: '',
  transaction_status: '',
};
