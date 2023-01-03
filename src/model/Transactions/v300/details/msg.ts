export interface MSGV300 {
  record_prefix: string;
  message_type: string;
  original_record_sequence_number: string;
  record_type: string;
  message_level: string;
  validation_number: string;
  message_text: string;
}

export const formMsgV300: MSGV300 = {
  record_prefix: '',
  message_type: '',
  original_record_sequence_number: '',
  record_type: '',
  message_level: '',
  validation_number: '',
  message_text: '',
};
