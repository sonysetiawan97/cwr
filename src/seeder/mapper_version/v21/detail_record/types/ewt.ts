import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'EWT';

export const EWT: MapperSeeder[] = [
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
    size: 60,
    end_char: 80,
    field: 'entire_work_title',
    description: 'Entire Work Title',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 80,
    size: 11,
    end_char: 91,
    field: 'iswc_of_entire_work',
    description: 'ISWC of Entire Work',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 91,
    size: 2,
    end_char: 93,
    field: 'language_code',
    description: 'Language Code',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 93,
    size: 45,
    end_char: 138,
    field: 'writer_1_last_name',
    description: 'Writer 1 Last Name',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 138,
    size: 30,
    end_char: 168,
    field: 'writer_1_first_name',
    description: 'Writer 1 First Name',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 168,
    size: 60,
    end_char: 228,
    field: 'source',
    description: 'Source',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 228,
    size: 11,
    end_char: 239,
    field: 'writer_1_ipi_name',
    description: 'Writer 1 IPI Name #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 239,
    size: 13,
    end_char: 252,
    field: 'writer_1_ipi_base_number',
    description: 'Writer 1 IPI Base Number',
    is_required: false,
  },
  
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 252,
    size: 45,
    end_char: 297,
    field: 'writer_2_last_name',
    description: 'Writer 2 Last Name',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 297,
    size:   30,
    end_char: 327,
    field: 'writer_2_first_name',
    description: 'Writer 2 First Name',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 327,
    size: 11,
    end_char: 338,
    field: 'writer_2_ipi_name',
    description: 'Writer 2 IPI Name #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 338,
    size: 13,
    end_char: 351,
    field: 'writer_2_ipi_base_number',
    description: 'Writer 2 IPI Base Number',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 351,
    size: 14,
    end_char: 370,
    field: 'submitter_work',
    description: 'Submitter Work #',
    is_required: false,
  },
];
