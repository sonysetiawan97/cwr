export interface RECV300 {
  record_prefix: string;
  release_date: string;
  recording_duration: string;
  isrc: string;
  recording_title: string;
  version_title: string;
  display_artist: string;
  display_artist_ipi_name_number: string;
  international_standard_name_identifier: string;
  record_kabel: string;
  isrc_validity: string;
  submitter_recording_identifier: string;
}

export const formRecV300: RECV300 = {
  record_prefix: '',
  release_date: '',
  recording_duration: '',
  isrc: '',
  recording_title: '',
  version_title: '',
  display_artist: '',
  display_artist_ipi_name_number: '',
  international_standard_name_identifier: '',
  record_kabel: '',
  isrc_validity: '',
  submitter_recording_identifier: '',
};
