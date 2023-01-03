export interface NRCV300 {
  record_prefix: string;
  release_date: string;
  recording_duration: string;
  isrc: string;
  recording_tite: string;
  title: string;
  display_artist: string;
  display_artist_ipi_name_number: string;
  international_standard_name_identifier: string;
  isrc_validity: string;
  submitter_recording_identifier: string;
  language_code: string;
  script_code: string;
}

export const formNrcV300: NRCV300 = {
  record_prefix: '',
  release_date: '',
  recording_duration: '',
  isrc: '',
  recording_tite: '',
  title: '',
  display_artist: '',
  display_artist_ipi_name_number: '',
  international_standard_name_identifier: '',
  isrc_validity: '',
  submitter_recording_identifier: '',
  language_code: '',
  script_code: '',
};
