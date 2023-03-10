import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'PER';
const version = versionAvailable.v300;

export const PER: MapperSeeder[] = [
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
    size: 45,
    end_char: 65,
    field: 'performing_artist_name',
    description: 'Performing Artist Name',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 65,
    size: 30,
    end_char: 95,
    field: 'performing_artist_first_name',
    description: 'Performing Artist First Name',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 95,
    size: 11,
    end_char: 106,
    field: 'performing_artist_ipi_name_number',
    description: 'Performing Artist IPI Name Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 106,
    size: 16,
    end_char: 122,
    field: 'international_standard_name_identifier',
    description: 'International Standard Name Identifier',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 122,
    size: 2,
    end_char: 124,
    field: 'performance_language',
    description: 'Performance Language',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Standard,
    tag: 'free_text',
    start_char: 124,
    size: 3,
    end_char: 127,
    field: 'performance_dialect',
    description: 'Performance Dialect',
    is_required: false,
  },
];
