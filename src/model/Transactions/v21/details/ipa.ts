export interface IPAV21 {
  record_prefix: string;
  agreement_role_code: string;
  interested_party_ipi_name: string;
  ipi_base_number: string;
  interested_party: string;
  interested_party_last_name: string;
  interested_party_writer_first_name: string;
  pr_affiliation_society: string;
  pr_share: string;
  mr_affiliation_society: string;
  mr_share: string;
  sr_affiliation_society: string;
  sr_share: string;
}

export const formIpaV21: IPAV21 = {
  record_prefix: '',
  agreement_role_code: '',
  interested_party_ipi_name: '',
  ipi_base_number: '',
  interested_party: '',
  interested_party_last_name: '',
  interested_party_writer_first_name: '',
  pr_affiliation_society: '',
  pr_share: '',
  mr_affiliation_society: '',
  mr_share: '',
  sr_affiliation_society: '',
  sr_share: '',
};
