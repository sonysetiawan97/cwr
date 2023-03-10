import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'DOT';
const version = versionAvailable.v300;

export const DOT: MapperSeeder[] = [
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
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 20,
    size: 640,
    end_char: 660,
    field: 'title',
    description: 'Title',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 660,
    size: 2,
    end_char: 662,
    field: 'language_code',
    description: 'Language Code',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 662,
    size: 4,
    end_char: 666,
    field: 'script_code',
    description: 'Script Code',
    is_required: false,
  },
];
