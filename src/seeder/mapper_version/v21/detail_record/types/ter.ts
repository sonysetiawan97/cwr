import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'TER';

export const TER: Array<MapperSeeder> = [
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
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 20,
    size: 1,
    end_char: 21,
    field: 'inclusion_exclusion_indicator',
    description: 'Inclusion/Exclusion Indicator',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 21,
    size: 4,
    end_char: 25,
    field: 'tis_numeric_code',
    description: 'TIS Numeric Code',
    is_required: true,
  },
];
