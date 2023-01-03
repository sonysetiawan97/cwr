export interface OPUV300 {
  record_prefix: string;
  publisher_sequence_number: string;
  interested_party_number: string;
  publisher_name: string;
  publisher_unknown_indicator: string;
  publisher_role: string;
  publisher_ip_name_number: string;
  publisher_ipi_base_number: string;
  usa_license_ind: string;
}

export const formOpuV300: OPUV300 = {
  record_prefix: '',
  publisher_sequence_number: '',
  interested_party_number: '',
  publisher_name: '',
  publisher_unknown_indicator: '',
  publisher_role: '',
  publisher_ip_name_number: '',
  publisher_ipi_base_number: '',
  usa_license_ind: '',
};
