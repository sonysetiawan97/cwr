export interface XRFV300 {
  record_prefix: string;
  organisation_code: string;
  identifier: string;
  identifier_type: string;
  identifier_validity: string;
}

export const formXrfV300: XRFV300 = {
  record_prefix: '',
  organisation_code: '',
  identifier: '',
  identifier_type: '',
  identifier_validity: '',
};
