import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'SPT';

export const SPT: MapperSeeder[] = [
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
    size: 6,
    end_char: 35,
    field: 'constant',
    description: 'Constant',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 35,
    size: 5,
    end_char: 40,
    field: 'pr_collection_share',
    description: 'PR Collection Share',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 40,
    size: 5,
    end_char: 45,
    field: 'mr_collection_share',
    description: 'MR Collection Share',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 45,
    size: 5,
    end_char: 50,
    field: 'sr_collection_share',
    description: 'SR Collection Share',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 50,
    size: 1,
    end_char: 51,
    field: 'inclusion_exclusion_indicator',
    description: 'Inclusion/Exclusion Indicator',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 51,
    size: 4,
    end_char: 55,
    field: 'tis_numeric_code',
    description: 'TIS Numeric Code',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Boolean,
    tag: 'free_text',
    start_char: 55,
    size: 1,
    end_char: 56,
    field: 'shares_change',
    description: 'Shares change',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 56,
    size: 3,
    end_char: 59,
    field: 'sequence',
    description: 'Sequence #',
    is_required: true,
  },
];
