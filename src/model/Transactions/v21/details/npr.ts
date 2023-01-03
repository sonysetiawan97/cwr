export interface NPRV21 {
  record_prefix: string;
  performing_artist_name: string;
  performing_artist_first_name: string;
  performing_artist_ip_name: string;
  performing_artist_ipi_base_number: string;
  language_code: string;
  performance_language: string;
  performance_dialect: string;
}

export const formNprV21: NPRV21 = {
  record_prefix: '',
  performing_artist_name: '',
  performing_artist_first_name: '',
  performing_artist_ip_name: '',
  performing_artist_ipi_base_number: '',
  language_code: '',
  performance_language: '',
  performance_dialect: '',
};
