export interface DWRV300 {
  record_prefix: string;
  work_title: string;
  language_code: string;
  submitter_work_number: string;
  iswc: string;
  retraction_reason_code: string;
}

export const formDwrV300: DWRV300 = {
  record_prefix: '',
  work_title: '',
  language_code: '',
  submitter_work_number: '',
  iswc: '',
  retraction_reason_code: '',
};
