import { inputTypeEnum } from '../enum/input_type';
import { versionAvailable } from '../enum/version';
import { FilenameSeeder } from '../model/filename';

export const filename: FilenameSeeder[] = [
  {
    version: versionAvailable.v21,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 1,
    end_char: 3,
    size: 2,
    field: 'identity',
  },
  {
    version: versionAvailable.v21,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 3,
    end_char: 5,
    size: 2,
    field: 'year',
  },
  {
    version: versionAvailable.v21,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 5,
    end_char: 9,
    size: 4,
    field: 'sequence',
  },
  {
    version: versionAvailable.v21,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 9,
    end_char: 12,
    size: 3,
    field: 'society',
  },
  {
    version: versionAvailable.v21,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 13,
    end_char: 16,
    size: 3,
    field: 'receiver',
  },

  {
    version: versionAvailable.v300,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 1,
    end_char: 3,
    size: 2,
    field: 'identity',
  },
  {
    version: versionAvailable.v300,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 3,
    end_char: 5,
    size: 2,
    field: 'year',
  },
  {
    version: versionAvailable.v300,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 5,
    end_char: 9,
    size: 4,
    field: 'file_number',
  },
  {
    version: versionAvailable.v300,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 0,
    end_char: 0,
    size: 0,
    field: 'submitter',
  },
  {
    version: versionAvailable.v300,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 0,
    end_char: 0,
    size: 0,
    field: 'recepient',
  },
  {
    version: versionAvailable.v300,
    input_type: inputTypeEnum.AlphaNumeric,
    tag: 'free_text',
    start_char: 0,
    end_char: 0,
    size: 0,
    field: 'version',
  },
  {
    version: versionAvailable.v300,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 0,
    end_char: 0,
    size: 0,
    field: 'revision',
  },
  {
    version: versionAvailable.v300,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 0,
    end_char: 0,
    size: 0,
    field: 'ext',
  },
];
