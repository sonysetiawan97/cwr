import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'OPU';

export const OPU: MapperSeeder[] = [
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 1,
    size: 19,
    end_char: 20,
    field: 'record_prefix',
    description: 'Record Prefix',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 20,
    size: 2,
    end_char: 22,
    field: 'publisher_sequence',
    description: 'Publisher Sequence #',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 22,
    size: 9,
    end_char: 31,
    field: 'interested_party',
    description: 'Interested Party #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 31,
    size: 45,
    end_char: 76,
    field: 'publisher_name',
    description: 'Publisher Name',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Flag,
    tag: 'free_text',
    start_char: 76,
    size: 1,
    end_char: 77,
    field: 'publisher_unknown_indicator',
    description: 'Publisher Unknown Indicator',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 77,
    size: 2,
    end_char: 79,
    field: 'publisher_type',
    description: 'Publisher Type',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 79,
    size: 9,
    end_char: 88,
    field: 'tax_id',
    description: 'Tax ID #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 88,
    size: 11,
    end_char: 99,
    field: 'publisher_ip_name',
    description: 'Publisher IPI Name #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 99,
    size: 14,
    end_char: 113,
    field: 'submitter_agreement_number',
    description: 'Submitter Agreement Number',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 113,
    size: 3,
    end_char: 116,
    field: 'pr_affiliation_society',
    description: 'PR Affiliation Society #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric999v99,
    tag: 'free_text',
    start_char: 116,
    size: 5,
    end_char: 121,
    field: 'pr_ownership_share',
    description: 'PR Ownership Share',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 121,
    size: 3,
    end_char: 124,
    field: 'mr_society',
    description: 'MR Society',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric999v99,
    tag: 'free_text',
    start_char: 124,
    size: 5,
    end_char: 129,
    field: 'mr_ownership_share',
    description: 'MR Ownership Share',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 129,
    size: 3,
    end_char: 132,
    field: 'sr_society',
    description: 'SR Society',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric999v99,
    tag: 'free_text',
    start_char: 132,
    size: 5,
    end_char: 137,
    field: 'sr_ownership_share',
    description: 'SR Ownership Share',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 137,
    size: 1,
    end_char: 138,
    field: 'special_agreements_indicator',
    description: 'Special Agreements Indicator',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Flag,
    tag: 'free_text',
    start_char: 138,
    size: 1,
    end_char: 139,
    field: 'first_recording_refusal_ind',
    description: 'First Recording Refusal Ind',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 139,
    size: 1,
    end_char: 140,
    field: 'filler',
    description: 'Filler',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 140,
    size: 13,
    end_char: 153,
    field: 'publisher_ipi_base_number',
    description: 'Publisher IPI Base Number',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 153,
    size: 14,
    end_char: 167,
    field: 'international_standard_agreement_code',
    description: 'International Standard Agreement Code',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 167,
    size: 14,
    end_char: 181,
    field: 'society_assigned_agreement_number',
    description: 'Society-assigned Agreement Number',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 181,
    size: 2,
    end_char: 183,
    field: 'agreement_type',
    description: 'Agreement Type',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 183,
    size: 1,
    end_char: 184,
    field: 'usa_license_ind',
    description: 'USA License Ind',
    is_required: false,
  },
];
