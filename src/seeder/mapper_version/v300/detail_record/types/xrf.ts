import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'XRF';
const version = versionAvailable.v300;

export const XRF: MapperSeeder[] = [
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
    size: 4,
    end_char: 24,
    field: 'organisation_code',
    description: 'Organisation Code',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 24,
    size: 14,
    end_char: 38,
    field: 'identifier',
    description: 'Identifier',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 38,
    size: 1,
    end_char: 39,
    field: 'identifier_type',
    description: 'Identifier Type',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 39,
    size: 1,
    end_char: 40,
    field: 'identifier_validity',
    description: 'Identifier Validity',
    is_required: false,
  },
];
