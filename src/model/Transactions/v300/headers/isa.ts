export interface ISAV300 {
  record_prefix: string;
  creation_date: string;
  creation_time: string;
  original_group_id: string;
  original_transaction_sequence_number: string;
  original_transaction_type: string;
  creation_title: string;
  language_code: string;
  submitter_work_number: string;
  processing_date: string;
  iswc: string;
  iswc_preferred_indicator: string;
  transaction_status: string;
}

export const formIsaV300: ISAV300 = {
  record_prefix: '',
  creation_date: '',
  creation_time: '',
  original_group_id: '',
  original_transaction_sequence_number: '',
  original_transaction_type: '',
  creation_title: '',
  language_code: '',
  submitter_work_number: '',
  processing_date: '',
  iswc: '',
  iswc_preferred_indicator: '',
  transaction_status: '',
};
