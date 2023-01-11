import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'PER';

export const PER: MapperSeeder[] = [
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
    size: 45,
    end_char: 65,
    field: 'performing_artist_last_name',
    description: 'Performing Artist Last Name',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
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
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 95,
    size: 11,
    end_char: 106,
    field: 'performing_artist_ipi_name',
    description: 'Performing Artist IPI Name #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 106,
    size: 13,
    end_char: 119,
    field: 'performing_artist_ipi_base_number',
    description: 'Performing Artist IPI Base Number',
    is_required: false,
  },
];
