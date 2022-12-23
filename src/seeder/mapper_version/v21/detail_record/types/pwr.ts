import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'PWR';

export const PWR: Array<MapperSeeder> = [
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
    size: 9,
    end_char: 29,
    field: 'interested_party',
    description: 'Interested Party #',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 29,
    size: 45,
    end_char: 74,
    field: 'publisher_name',
    description: 'Publisher Name',
    is_required: true,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 74,
    size: 14,
    end_char: 88,
    field: 'submitter_agreement_number',
    description: 'Submitter Agreement Number',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 88,
    size: 14,
    end_char: 102,
    field: 'society_assigned_agreement_number',
    description: 'Society Assigned Agreement Number',
    is_required: false,
  },
  {
    version: versionAvailable.v21,
    group_name,
    input_type: inputTypeEnum.Alpha,
    tag: 'free_text',
    start_char: 102,
    size: 9,
    end_char: 111,
    field: 'writer_ip',
    description: 'Writer IP #',
    is_required: true,
  },
];
