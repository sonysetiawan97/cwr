import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'ALT';
const version = versionAvailable.v300;

export const ALT: MapperSeeder[] = [
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
    size: 60,
    end_char: 80,
    field: 'alternate_title',
    description: 'Alternate Title',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 80,
    size: 2,
    end_char: 82,
    field: 'title_type',
    description: 'Title Type',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 82,
    size: 2,
    end_char: 84,
    field: 'language_code',
    description: 'Language Code',
    is_required: false,
  },
];
