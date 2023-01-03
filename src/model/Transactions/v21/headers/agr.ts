export interface AGRV21 {
  record_prefix: string;
  submitter_agreement_number: string;
  international_standard_agreement_code?: string;
  agreement_type: string;
  agreement_start_date: string;
  agreement_end_date?: string;
  retention_end_date?: string;
  prior_royalty_status: string;
  prior_royalty_start_date?: string;
  post_term_collection_status: string;
  post_term_collection_end_date?: string;
  date_of_signature_of_agreement?: string;
  number_of_works: string;
  sales_manufacture_clause?: string;
  shares_change?: string;
  advance_given?: string;
  society_assigned_agreement_number?: string;
}

export const formAgrV21: AGRV21 = {
  record_prefix: '',
  submitter_agreement_number: '',
  agreement_type: '',
  agreement_start_date: '',
  prior_royalty_status: '',
  post_term_collection_status: '',
  number_of_works: '',
};
