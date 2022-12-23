import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'IPA';

export const IPA: Array<MapperSeeder> = [
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
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 20,
    size: 2,
    end_char: 22,
    field: 'agreement_role_code',
    description: 'Agreement Role Code',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 22,
    size: 11,
    end_char: 33,
    field: 'interested_party_ipi_name',
    description: 'Interested Party IPI Name #',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 33,
    size: 13,
    end_char: 46,
    field: 'ipi_base_number',
    description: 'IPI Base Number',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 46,
    size: 9,
    end_char: 55,
    field: 'interested_party',
    description: 'Interested Party #',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 55,
    size: 45,
    end_char: 100,
    field: 'interested_party_last_name',
    description: 'Interested Party Last Name',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 100,
    size: 30,
    end_char: 130,
    field: 'interested_party_writer_first_name',
    description: 'Interested Party Writer First Name',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 130,
    size: 3,
    end_char: 133,
    field: 'pr_affiliation_society',
    description: 'PR Affiliation Society',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 133,
    size: 5,
    end_char: 138,
    field: 'pr_share',
    description: 'PR Share',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 138,
    size: 3,
    end_char: 141,
    field: 'mr_affiliation_society',
    description: 'MR Affiliation Society',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 141,
    size: 5,
    end_char: 146,
    field: 'mr_share',
    description: 'MR Share',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Lookup,
    tag: 'free_text',
    start_char: 146,
    size: 3,
    end_char: 149,
    field: 'sr_affiliation_society',
    description: 'SR Affiliation Society',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Numeric,
    tag: 'free_text',
    start_char: 149,
    size: 5,
    end_char: 154,
    field: 'sr_share',
    description: 'SR Share',
    is_required: false,
  },
];
