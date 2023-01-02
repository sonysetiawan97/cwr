import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'LIC';
const version = versionAvailable.v300;

export const LIC: Array<MapperSeeder> = [
  {
    description: 'Record Prefix',
    field: 'record_prefix',
    start_char: 1,
    size: 19,
    end_char: 20,
    input_type: inputTypeEnum.Alpha,
    is_required: true,
    tag: 'free_text',
    version,
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
    version,
    group_name,
  },
  {
    description: 'Submitter Work Number',
    field: 'submitter_work_number',
    start_char: 80,
    size: 14,
    end_char: 94,
    input_type: inputTypeEnum.Alpha,
    is_required: true,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'ISWC',
    field: 'iswc',
    start_char: 94,
    size: 11,
    end_char: 105,
    input_type: inputTypeEnum.Standard,
    is_required: false,
    tag: 'free_text',
    version,
    group_name,
  },
];
