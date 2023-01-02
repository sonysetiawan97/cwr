import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'IND';
const version = versionAvailable.v300;

export const IND: Array<MapperSeeder> = [
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
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 20,
    size: 3,
    end_char: 23,
    field: 'instrument_code',
    description: 'Instrument Code',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 23,
    size: 3,
    end_char: 26,
    field: 'number_of_players',
    description: 'Number of Players',
    is_required: false,
  },
];
