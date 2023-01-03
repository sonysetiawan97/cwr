export interface SPUV300 {
  record_prefix: string;
  publisher_sequence_number: string;
  interested_party_number: string;
  publisher_name: string;
  publisher_unknown_indicator: string;
  publisher_role: string;
  publisher_ipi_name: string;
  publisher_ipi_base_number: string;
  usa_license_ind: string;
}

export const formSpuV300: SPUV300 = {
  record_prefix: '',
  publisher_sequence_number: '',
  interested_party_number: '',
  publisher_name: '',
  publisher_unknown_indicator: '',
  publisher_role: '',
  publisher_ipi_name: '',
  publisher_ipi_base_number: '',
  usa_license_ind: '',
};
