import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'ACK';
const version = versionAvailable.v300;

export const ACK: Array<MapperSeeder> = [
  {
    description: 'Record Prefix',
    field: 'record_prefix',
    start_char: 1,
    size: 19,
    end_char: 20,
    input_type: inputTypeEnum.Alpha,
    is_required: true,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'Creation Date',
    field: 'creation_date',
    start_char: 20,
    size: 8,
    end_char: 28,
    input_type: inputTypeEnum.Date,
    is_required: true,
    tag: 'free_text_date',
    version,
    group_name,
  },
  {
    description: 'Creation Time',
    field: 'creation_time',
    start_char: 28,
    size: 6,
    end_char: 34,
    input_type: inputTypeEnum.Time,
    is_required: true,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'Original Group Code',
    field: 'original_group_code',
    start_char: 34,
    size: 5,
    end_char: 39,
    input_type: inputTypeEnum.Numeric,
    is_required: true,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'Original Transaction Sequence Number',
    field: 'original_transaction_sequence_number',
    start_char: 39,
    size: 8,
    end_char: 47,
    input_type: inputTypeEnum.Numeric,
    is_required: true,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'Original Transaction Type',
    field: 'original_transaction_type',
    start_char: 47,
    size: 3,
    end_char: 50,
    input_type: inputTypeEnum.Lookup,
    is_required: true,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'Creation Title',
    field: 'creation_title',
    start_char: 50,
    size: 60,
    end_char: 110,
    input_type: inputTypeEnum.Alpha,
    is_required: false,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'Submitter Creation Number',
    field: 'submitter_creation_number',
    start_char: 110,
    size: 20,
    end_char: 130,
    input_type: inputTypeEnum.Alpha,
    is_required: false,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'Recipient Creation Number',
    field: 'recipient_creation_number',
    start_char: 130,
    size: 20,
    end_char: 150,
    input_type: inputTypeEnum.Alpha,
    is_required: false,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'Recipient Temporary Creation Number',
    field: 'recipient_temporary_creation_number',
    start_char: 150,
    size: 20,
    end_char: 170,
    input_type: inputTypeEnum.Alpha,
    is_required: false,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'Processing Date',
    field: 'processing_date',
    start_char: 170,
    size: 8,
    end_char: 178,
    input_type: inputTypeEnum.Date,
    is_required: true,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'Transaction Status',
    field: 'transaction_status',
    start_char: 178,
    size: 2,
    end_char: 180,
    input_type: inputTypeEnum.Lookup,
    is_required: true,
    tag: 'free_text',
    version,
    group_name,
  },
  {
    description: 'CWR_SUB Filename',
    field: 'cwr_sub_filename',
    start_char: 180,
    size: 27,
    end_char: 207,
    input_type: inputTypeEnum.Alpha,
    is_required: true,
    tag: 'free_text',
    version,
    group_name,
  },
];
