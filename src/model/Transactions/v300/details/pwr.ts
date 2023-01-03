export interface PWRV300 {
  record_prefix: string;
  publisher_sequence_number: string;
  publisher_ip_number: string;
  writer_ip_number: string;
  submitter_agreement_number: string;
  recipient_code: string;
  recipient_agreement_number: string;
  agreement_type: string;
}

export const formPwrV300: PWRV300 = {
  record_prefix: '',
  publisher_sequence_number: '',
  publisher_ip_number: '',
  writer_ip_number: '',
  submitter_agreement_number: '',
  recipient_code: '',
  recipient_agreement_number: '',
  agreement_type: '',
};
