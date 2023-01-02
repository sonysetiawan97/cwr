import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'PWR';
const version = versionAvailable.v300;

export const PWR: Array<MapperSeeder> = [
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
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 20,
    size: 2,
    end_char: 22,
    field: 'publisher_sequence_number',
    description: 'Publisher Sequence Number',
    is_required: true,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 22,
    size: 9,
    end_char: 31,
    field: 'publisher_ip_number',
    description: 'Publisher IP Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 31,
    size: 9,
    end_char: 40,
    field: 'writer_ip_number',
    description: 'Writer IP Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 40,
    size: 14,
    end_char: 54,
    field: 'submitter_agreement_number',
    description: 'Submitter Agreement Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 54,
    size: 4,
    end_char: 58,
    field: 'recipient_code',
    description: 'Recipient Code',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 58,
    size: 14,
    end_char: 72,
    field: 'recipient_agreement_number',
    description: 'Recipient Agreement Number',
    is_required: false,
  },
  {
    version,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 72,
    size: 2,
    end_char: 74,
    field: 'agreement_type',
    description: 'Agreement Type',
    is_required: false,
  },
];
