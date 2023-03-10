import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'OWK';
const version = versionAvailable.v300;

export const OWK: MapperSeeder[] = [
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
    field: 'original_work_title',
    description: 'Original Work Title',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 80,
    size: 11,
    end_char: 91,
    field: 'iswc_of_original_work',
    description: 'ISWC of Original Work',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 91,
    size: 14,
    end_char: 105,
    field: 'submitter_original_work_number',
    description: 'Submitter Original Work Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 105,
    size: 25,
    end_char: 130,
    field: 'opus_number',
    description: 'Opus Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 130,
    size: 25,
    end_char: 155,
    field: 'catalogue_number',
    description: 'Catalogue Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Time,
    tag: 'free_text',
    start_char: 155,
    size: 6,
    end_char: 161,
    field: 'duration',
    description: 'Duration',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 161,
    size: 2,
    end_char: 163,
    field: 'language_code',
    description: 'Language Code',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 163,
    size: 45,
    end_char: 208,
    field: 'writer_1_last_name',
    description: 'Writer 1 Last Name',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 208,
    size: 30,
    end_char: 238,
    field: 'writer_1_first_name',
    description: 'Writer 1 First Name',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 238,
    size: 11,
    end_char: 249,
    field: 'writer_1_ipi_name_number',
    description: 'Writer 1 IPI Name Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 249,
    size: 13,
    end_char: 262,
    field: 'writer_1_ipi_base_number',
    description: 'Writer 1 IPI Base Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 163,
    size: 45,
    end_char: 208,
    field: 'writer_2_last_name',
    description: 'Writer 2 Last Name',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 208,
    size: 30,
    end_char: 238,
    field: 'writer_2_first_name',
    description: 'Writer 2 First Name',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 238,
    size: 11,
    end_char: 249,
    field: 'writer_2_ipi_name_number',
    description: 'Writer 2 IPI Name Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 249,
    size: 13,
    end_char: 262,
    field: 'writer_2_ipi_base_number',
    description: 'Writer 2 IPI Base Number',
    is_required: false,
  },
];
