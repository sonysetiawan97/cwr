export interface NPRV300 {
  record_prefix: string;
  performing_artist_name: string;
  performing_artist_first_name: string;
  performing_artist_ip_name_number: string;
  international_standard_name_identifier: string;
  performance_language: string;
  performance_dialect: string;
  language_code: string;
  script_code: string;
}

export const formNprV300: NPRV300 = {
  record_prefix: '',
  performing_artist_name: '',
  performing_artist_first_name: '',
  performing_artist_ip_name_number: '',
  international_standard_name_identifier: '',
  performance_language: '',
  performance_dialect: '',
  language_code: '',
  script_code: '',
};
