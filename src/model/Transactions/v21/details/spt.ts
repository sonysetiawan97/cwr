export interface SPTV21 {
  record_prefix: string;
  interested_party: string;
  constant: string;
  pr_collection_share: string;
  mr_collection_share: string;
  sr_collection_share: string;
  inclusion_exclusion_indicator: string;
  tis_numeric_code: string;
  shares_change: string;
  sequence: string;
}

export const formSptV21: SPTV21 = {
  record_prefix: '',
  interested_party: '',
  constant: '',
  pr_collection_share: '',
  mr_collection_share: '',
  sr_collection_share: '',
  inclusion_exclusion_indicator: '',
  tis_numeric_code: '',
  shares_change: '',
  sequence: '',
};
