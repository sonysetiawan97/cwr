export interface SWRV300 {
  record_prefix: string;
  interested_party_number: string;
  writer_last_name: string;
  writer_first_name: string;
  writer_unknown_indicator: string;
  writer_role: string;
  writer_ipi_name_number: string;
  writer_ipi_base_number: string;
  reversionary_indicator: string;
  first_recording_refusal_ind: string;
  work_for_hire_indicator: string;
  usa_license_indicator: string;
}

export const formSwrV300: SWRV300 = {
  record_prefix: '',
  interested_party_number: '',
  writer_last_name: '',
  writer_first_name: '',
  writer_unknown_indicator: '',
  writer_role: '',
  writer_ipi_name_number: '',
  writer_ipi_base_number: '',
  reversionary_indicator: '',
  first_recording_refusal_ind: '',
  work_for_hire_indicator: '',
  usa_license_indicator: '',
};
