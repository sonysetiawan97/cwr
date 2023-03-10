import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'ISR';

export const ISR: MapperSeeder[] = [
  {
    description: 'Record Prefix',
    field: 'record_prefix',
    start_char: 1,
    size: 19,
    end_char: 20,
    input_type: inputTypeEnum.Alpha,
    is_required: true,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Work Title',
    field: 'work_title',
    start_char: 20,
    size: 60,
    end_char: 80,
    input_type: inputTypeEnum.Alpha,
    is_required: true,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Language Code',
    field: 'language_code',
    start_char: 80,
    size: 2,
    end_char: 82,
    input_type: inputTypeEnum.Standard,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Submitter Work Number',
    field: 'submitter_work_number',
    start_char: 82,
    size: 14,
    end_char: 96,
    input_type: inputTypeEnum.Alpha,
    is_required: true,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'ISWC',
    field: 'iswc',
    start_char: 96,
    size: 11,
    end_char: 107,
    input_type: inputTypeEnum.Standard,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'ISWC Preferred Indicator',
    field: 'iscw_preferred_indicator',
    start_char: 107,
    size: 1,
    end_char: 108,
    input_type: inputTypeEnum.Alpha,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
];
