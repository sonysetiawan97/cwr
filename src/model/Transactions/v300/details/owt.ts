export interface OWTV300 {
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
  recipient_code: string;
}

export const formOwtV300: OWTV300 = {
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
  recipient_code: '',
};
