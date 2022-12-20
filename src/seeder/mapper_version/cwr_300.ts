import { controlRecordEnum } from '../../enum/control_record';
import { versionAvailable } from '../../enum/version';
import { MapperSeeder } from '../../model/mapper';

const HDR: Array<MapperSeeder> = [
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'alpha',
    is_required: true,
    tag: 'free_text',
    start_char: 1,
    end_char: 4,
    size: 3,
    field: 'record_type',
    description: 'Record Type',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'alpha',
    is_required: true,
    tag: 'free_text',
    start_char: 4,
    end_char: 6,
    size: 2,
    field: 'submitter_type',
    description: 'Submitter Type',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'lookup',
    is_required: true,
    tag: 'free_text',
    start_char: 6,
    end_char: 10,
    size: 4,
    field: 'submitter_code',
    description: 'Submitter Code',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'alpha',
    is_required: true,
    tag: 'free_text',
    start_char: 10,
    end_char: 55,
    size: 45,
    field: 'submitter_name',
    description: 'Submitter Name',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'alpha',
    is_required: true,
    tag: 'free_text',
    start_char: 55,
    end_char: 66,
    size: 11,
    field: 'submitter_ipi_name_number',
    description: 'Submitter IPI Name Number',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'date',
    is_required: true,
    tag: 'free_text_date',
    start_char: 66,
    end_char: 74,
    size: 8,
    field: 'creation_date',
    description: 'Creation Date',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'time',
    is_required: true,
    tag: 'free_text_time',
    start_char: 74,
    end_char: 80,
    size: 6,
    field: 'creation_time',
    description: 'Creation Time',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'date',
    is_required: true,
    tag: 'free_text_date',
    start_char: 80,
    end_char: 88,
    size: 8,
    field: 'transmission_date',
    description: 'Transmission Date',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'lookup',
    is_required: false,
    tag: 'free_text',
    start_char: 88,
    end_char: 103,
    size: 15,
    field: 'character_set',
    description: 'Character Set',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'alpha',
    is_required: false,
    tag: 'free_text',
    start_char: 103,
    end_char: 106,
    size: 3,
    field: 'version',
    description: 'Version',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'lookup',
    is_required: false,
    tag: 'free_text',
    start_char: 106,
    end_char: 109,
    size: 3,
    field: 'revision',
    description: 'Revision',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'alpha',
    is_required: false,
    tag: 'free_text',
    start_char: 109,
    end_char: 139,
    size: 30,
    field: 'software_package',
    description: 'Software Package',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'alpha',
    is_required: false,
    tag: 'free_text',
    start_char: 139,
    end_char: 169,
    size: 3,
    field: 'software_package_version',
    description: 'Software Package Version',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.HDR,
    input_type: 'alpha',
    is_required: false,
    tag: 'free_text',
    start_char: 169,
    end_char: 196,
    size: 27,
    field: 'filename',
    description: 'Filename',
  },
];

const GRH: Array<MapperSeeder> = [
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.GRH,
    input_type: 'lookup',
    is_required: true,
    tag: 'free_text',
    start_char: 1,
    end_char: 4,
    size: 3,
    field: 'record_type',
    description: 'Record Type',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.GRH,
    input_type: 'lookup',
    is_required: true,
    tag: 'free_text',
    start_char: 4,
    end_char: 7,
    size: 3,
    field: 'transaction_type',
    description: 'Transaction Type',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.GRH,
    input_type: 'numeric',
    is_required: true,
    tag: 'free_text',
    start_char: 7,
    end_char: 12,
    size: 5,
    field: 'group_code',
    description: 'Group Code',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.GRH,
    input_type: 'alpha',
    is_required: true,
    tag: 'free_text',
    start_char: 12,
    end_char: 17,
    size: 5,
    field: 'version_number_for_this_transaction_type',
    description: 'Version Number for this transaction type',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.GRH,
    input_type: 'numeric',
    is_required: true,
    tag: 'free_text',
    start_char: 17,
    end_char: 27,
    size: 10,
    field: 'batch_request',
    description: 'Batch Request',
  },
];

const GRT: Array<MapperSeeder> = [
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.GRT,
    input_type: 'lookup',
    is_required: true,
    tag: 'free_text',
    start_char: 1,
    end_char: 4,
    size: 3,
    field: 'record_type',
    description: 'Record Type',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.GRT,
    input_type: 'numeric',
    is_required: true,
    tag: 'free_text',
    start_char: 4,
    end_char: 9,
    size: 5,
    field: 'group_id',
    description: 'Group ID',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.GRT,
    input_type: 'numeric',
    is_required: true,
    tag: 'free_text',
    start_char: 9,
    end_char: 17,
    size: 8,
    field: 'transaction_count',
    description: 'Transaction Count',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.GRT,
    input_type: 'numeric',
    is_required: true,
    tag: 'free_text',
    start_char: 17,
    end_char: 25,
    size: 8,
    field: 'record_count',
    description: 'Record Count',
  },
];

const TRL: Array<MapperSeeder> = [
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.TRL,
    input_type: 'lookup',
    is_required: true,
    tag: 'free_text',
    start_char: 1,
    end_char: 4,
    size: 3,
    field: 'record_type',
    description: 'Record Type',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.TRL,
    input_type: 'numeric',
    is_required: true,
    tag: 'free_text',
    start_char: 4,
    end_char: 9,
    size: 5,
    field: 'group_id',
    description: 'Group ID',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.TRL,
    input_type: 'numeric',
    is_required: true,
    tag: 'free_text',
    start_char: 9,
    end_char: 17,
    size: 8,
    field: 'transaction_count',
    description: 'Transaction Count',
  },
  {
    version: versionAvailable.v300,
    group_name: controlRecordEnum.TRL,
    input_type: 'numeric',
    is_required: true,
    tag: 'free_text',
    start_char: 17,
    end_char: 25,
    size: 8,
    field: 'record_count',
    description: 'Record Count',
  },
];

export const cwr300: Array<MapperSeeder> = [...HDR, ...GRH, ...GRT, ...TRL];
