export interface MSGV21 {
  record_prefix: string;
  message_type: string;
  original_record_sequence: string;
  record_type: string;
  message_level: string;
  validation_number: string;
  message_text: string;
}

export const formMsgV21: MSGV21 = {
  record_prefix: '',
  message_type: '',
  original_record_sequence: '',
  record_type: '',
  message_level: '',
  validation_number: '',
  message_text: '',
};
