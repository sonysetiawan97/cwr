export interface SWRV21 {
  record_prefix: string;
  interested_party: string;
  writer_last_name: string;
  writer_first_name: string;
  writer_unknown_indicator: string;
  writer_designation_code: string;
  tax_id: string;
  writer_ipi_name: string;
  pr_affiliation_society: string;
  pr_ownership_share: string;
  mr_society: string;
  mr_ownership_share: string;
  sr_society: string;
  sr_ownership_share: string;
  reversionary_indicator: string;
  first_recording_refusal_ind: string;
  work_for_hire_indicator: string;
  filler: string;
  writer_ipi_base_number: string;
  personal_number: string;
  usa_license_ind: string;
}

export const formSwrV21: SWRV21 = {
  record_prefix: '',
  interested_party: '',
  writer_last_name: '',
  writer_first_name: '',
  writer_unknown_indicator: '',
  writer_designation_code: '',
  tax_id: '',
  writer_ipi_name: '',
  pr_affiliation_society: '',
  pr_ownership_share: '',
  mr_society: '',
  mr_ownership_share: '',
  sr_society: '',
  sr_ownership_share: '',
  reversionary_indicator: '',
  first_recording_refusal_ind: '',
  work_for_hire_indicator: '',
  filler: '',
  writer_ipi_base_number: '',
  personal_number: '',
  usa_license_ind: '',
};
