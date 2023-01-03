export interface OPTV300 {
  record_prefix: string;
  sequence_number: string;
  interested_party_number: string;
  pr_collection_share: string;
  mr_collection_share: string;
  sr_collection_share: string;
  inclusion_exclusion_indicator: string;
  territory_code: string;
  pr_affiliation_society_number: string;
  mr_affiliation_society_number: string;
  sr_affiliation_society_number: string;
  special_agreement_indicator: string;
  first_recording_refusal_indicator: string;
  submitter_agreement_number: string;
  recipient_agreement_number: string;
  agreement_type: string;
  recipient_code: string;
}

export const formOptV300: OPTV300 = {
  record_prefix: '',
  sequence_number: '',
  interested_party_number: '',
  pr_collection_share: '',
  mr_collection_share: '',
  sr_collection_share: '',
  inclusion_exclusion_indicator: '',
  territory_code: '',
  pr_affiliation_society_number: '',
  mr_affiliation_society_number: '',
  sr_affiliation_society_number: '',
  special_agreement_indicator: '',
  first_recording_refusal_indicator: '',
  submitter_agreement_number: '',
  recipient_agreement_number: '',
  agreement_type: '',
  recipient_code: '',
};
