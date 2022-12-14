import { FilenameSeeder } from '../model/filename';

export const filename: Array<FilenameSeeder> = [
  {
    version: 'V21',
    input_type: 'alpha',
    tag: 'free_text',
    start_char: 1,
    end_char: 3,
    size: 2,
    field: 'identity',
  },
  {
    version: 'V21',
    input_type: 'numeric',
    tag: 'free_text',
    start_char: 3,
    end_char: 5,
    size: 2,
    field: 'year',
  },
  {
    version: 'V21',
    input_type: 'numeric',
    tag: 'free_text',
    start_char: 5,
    end_char: 9,
    size: 4,
    field: 'sequence',
  },
  {
    version: 'V21',
    input_type: 'numeric',
    tag: 'free_text',
    start_char: 9,
    end_char: 12,
    size: 3,
    field: 'society',
  },
  {
    version: 'V21',
    input_type: 'numeric',
    tag: 'free_text',
    start_char: 13,
    end_char: 16,
    size: 3,
    field: 'receiver',
  },
];
