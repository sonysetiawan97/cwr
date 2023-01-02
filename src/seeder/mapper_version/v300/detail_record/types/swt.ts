import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'SWT';
const version = versionAvailable.v300;

export const SWT: Array<MapperSeeder> = [
  {
    version,
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
    version,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 20,
    size: 3,
    end_char: 23,
    field: 'sequence_number',
    description: 'Sequence Number',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 23,
    size: 9,
    end_char: 32,
    field: 'interested_party_number',
    description: 'Interested Party Number',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 32,
    size: 5,
    end_char: 37,
    field: 'pr_collection_share',
    description: 'PR Collection Share',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 37,
    size: 5,
    end_char: 42,
    field: 'mr_collection_share',
    description: 'MR Collection Share',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 42,
    size: 5,
    end_char: 47,
    field: 'sr_collection_share',
    description: 'SR Collection Share',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 47,
    size: 1,
    end_char: 48,
    field: 'inclusion_exclusion_indicator',
    description: 'Inclusion/Exclusion Indicator',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 48,
    size: 4,
    end_char: 52,
    field: 'territory_code',
    description: 'Territory Code',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 52,
    size: 4,
    end_char: 56,
    field: 'pr_affiliation_society_number',
    description: 'PR Affiliation Society Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 56,
    size: 4,
    end_char: 60,
    field: 'mr_affiliation_society_number',
    description: 'MR Affiliation Society Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 60,
    size: 4,
    end_char: 64,
    field: 'sr_affiliation_society_number',
    description: 'SR Affiliation Society Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 64,
    size: 4,
    end_char: 68,
    field: 'recipient_code',
    description: 'Recipient Code',
    is_required: true,
  },
];
