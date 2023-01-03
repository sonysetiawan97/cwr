import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'ARI';

export const ARI: Array<MapperSeeder> = [
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
    size: 3,
    end_char: 23,
    field: 'society',
    description: 'Society #',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 23,
    size: 14,
    end_char: 37,
    field: 'work',
    description: 'Work #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 37,
    size: 3,
    end_char: 40,
    field: 'type_of_right',
    description: 'Type of Right',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 40,
    size: 2,
    end_char: 42,
    field: 'subject_code',
    description: 'Subject Code',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 42,
    size: 160,
    end_char: 202,
    field: 'note',
    description: 'Note',
    is_required: false,
  },
];