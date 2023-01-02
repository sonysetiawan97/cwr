import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'NOW';
const version = versionAvailable.v300;

export const NOW: Array<MapperSeeder> = [
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
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 20,
    size: 160,
    end_char: 180,
    field: 'writer_name',
    description: 'Writer Name',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 180,
    size: 160,
    end_char: 340,
    field: 'writer_first_name',
    description: 'Writer First Name',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 340,
    size: 1,
    end_char: 341,
    field: 'writer_position',
    description: 'Writer Postion',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 341,
    size: 2,
    end_char: 343,
    field: 'language_code',
    description: 'Language Code',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 343,
    size: 4,
    end_char: 347,
    field: 'script_code',
    description: 'Script Code',
    is_required: false,
  },
];
