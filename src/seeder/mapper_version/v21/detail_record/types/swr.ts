import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'SWR';

export const SWR: MapperSeeder[] = [
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
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
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 20,
    size: 9,
    end_char: 29,
    field: 'interested_party',
    description: 'Interested Party #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 29,
    size: 45,
    end_char: 74,
    field: 'writer_last_name',
    description: 'Writer Last Name',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 74,
    size: 30,
    end_char: 104,
    field: 'writer_first_name',
    description: 'Writer First Name',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Flag,
    tag: 'free_text',
    start_char: 104,
    size: 1,
    end_char: 105,
    field: 'writer_unknown_indicator',
    description: 'Writer Unknown Indicator',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 105,
    size: 2,
    end_char: 107,
    field: 'writer_designation_code',
    description: 'Writer Designation Code',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 107,
    size: 9,
    end_char: 116,
    field: 'tax_id',
    description: 'Tax ID #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 116,
    size: 11,
    end_char: 127,
    field: 'writer_ipi_name',
    description: 'Writer IPI Name #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 127,
    size: 3,
    end_char: 130,
    field: 'pr_affiliation_society',
    description: 'PR Affiliation Society #',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric999v99,
    tag: 'free_text',
    start_char: 130,
    size: 5,
    end_char: 135,
    field: 'pr_ownership_share',
    description: 'PR Ownership Share',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 135,
    size: 3,
    end_char: 138,
    field: 'mr_society',
    description: 'MR Society',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric999v99,
    tag: 'free_text',
    start_char: 138,
    size: 5,
    end_char: 143,
    field: 'mr_ownership_share',
    description: 'MR Ownership Share',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 143,
    size: 3,
    end_char: 146,
    field: 'sr_society',
    description: 'SR Society',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric999v99,
    tag: 'free_text',
    start_char: 146,
    size: 5,
    end_char: 151,
    field: 'sr_ownership_share',
    description: 'SR Ownership Share',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Flag,
    tag: 'free_text',
    start_char: 151,
    size: 1,
    end_char: 152,
    field: 'reversionary_indicator',
    description: 'Reversionary Indicator',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Boolean,
    tag: 'free_text',
    start_char: 152,
    size: 1,
    end_char: 153,
    field: 'first_recording_refusal_ind',
    description: 'First Recording Refusal Ind',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Boolean,
    tag: 'free_text',
    start_char: 153,
    size: 1,
    end_char: 154,
    field: 'work_for_hire_indicator',
    description: 'Work For Hire Indicator',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 154,
    size: 1,
    end_char: 155,
    field: 'filler',
    description: 'Filler',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 155,
    size: 13,
    end_char: 168,
    field: 'writer_ipi_base_number',
    description: 'Writer IPI Base Number',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 168,
    size: 12,
    end_char: 180,
    field: 'personal_number',
    description: 'Personal Number',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 180,
    size: 1,
    end_char: 181,
    field: 'usa_license_ind',
    description: 'USA License Ind.',
    is_required: false,
  },
];
