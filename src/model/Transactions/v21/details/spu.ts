export interface SPUV21 {
  record_prefix: string;
  publisher_sequence: string;
  interested_party: string;
  publisher_name: string;
  publisher_unknown_indicator: string;
  publisher_type: string;
  tax_id: string;
  publisher_ipi_name: string;
  submitter_agreement_number: string;
  pr_affiliation_society: string;
  pr_ownership_share: string;
  mr_society: string;
  mr_ownership_share: string;
  sr_society: string;
  sr_ownership_share: string;
  special_agreements_indicator: string;
  first_recording_refusal_ind: string;
  filler: string;
  publisher_ipi_base_number: string;
  international_standard_agreement_code: string;
  society_assigned_agreement_number: string;
  agreement_type: string;
  usa_license_ind: string;
}

export const formSpuV21: SPUV21 = {
  record_prefix: '',
  publisher_sequence: '',
  interested_party: '',
  publisher_name: '',
  publisher_unknown_indicator: '',
  publisher_type: '',
  tax_id: '',
  publisher_ipi_name: '',
  submitter_agreement_number: '',
  pr_affiliation_society: '',
  pr_ownership_share: '',
  mr_society: '',
  mr_ownership_share: '',
  sr_society: '',
  sr_ownership_share: '',
  special_agreements_indicator: '',
  first_recording_refusal_ind: '',
  filler: '',
  publisher_ipi_base_number: '',
  international_standard_agreement_code: '',
  society_assigned_agreement_number: '',
  agreement_type: '',
  usa_license_ind: '',
};
