import { inputTypeEnum } from '../../../../../enum/input_type';
import { versionAvailable } from '../../../../../enum/version';
import { MapperSeeder } from '../../../../../model/mapper';

const group_name = 'EXC';

export const EXC: MapperSeeder[] = [
  {
    description: 'Record Prefix',
    field: 'record_prefix',
    start_char: 1,
    size: 19,
    end_char: 20,
    input_type: inputTypeEnum.Alpha,
    is_required: true,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Work Title',
    field: 'work_title',
    start_char: 20,
    size: 60,
    end_char: 80,
    input_type: inputTypeEnum.Alpha,
    is_required: true,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Language Code',
    field: 'language_code',
    start_char: 80,
    size: 2,
    end_char: 82,
    input_type: inputTypeEnum.Lookup,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Submitter Work #',
    field: 'submitter_work',
    start_char: 82,
    size: 14,
    end_char: 96,
    input_type: inputTypeEnum.Alpha,
    is_required: true,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'ISWC',
    field: 'iswc',
    start_char: 96,
    size: 11,
    end_char: 107,
    input_type: inputTypeEnum.Alpha,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Copyright Date',
    field: 'copyright_date',
    start_char: 107,
    size: 8,
    end_char: 115,
    input_type: inputTypeEnum.Date,
    is_required: false,
    tag: 'free_text_date',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Copyright Number',
    field: 'copyright_number',
    start_char: 115,
    size: 12,
    end_char: 127,
    input_type: inputTypeEnum.Alpha,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Musical Work Distribution Category',
    field: 'musical_work_distribution_category',
    start_char: 127,
    size: 3,
    end_char: 130,
    input_type: inputTypeEnum.Lookup,
    is_required: true,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Duration',
    field: 'duration',
    start_char: 130,
    size: 6,
    end_char: 136,
    input_type: inputTypeEnum.Time,
    is_required: false,
    tag: 'free_text_date',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Recorded Indicator',
    field: 'recorded_indicator',
    start_char: 136,
    size: 1,
    end_char: 137,
    input_type: inputTypeEnum.Flag,
    is_required: true,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Text Music Relationship',
    field: 'text_music_relationship',
    start_char: 137,
    size: 3,
    end_char: 140,
    input_type: inputTypeEnum.Lookup,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Composite Type',
    field: 'composite_type',
    start_char: 140,
    size: 3,
    end_char: 143,
    input_type: inputTypeEnum.Lookup,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Version Type',
    field: 'version_type',
    start_char: 143,
    size: 3,
    end_char: 146,
    input_type: inputTypeEnum.Lookup,
    is_required: true,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Excerpt Type',
    field: 'excerpt_type',
    start_char: 146,
    size: 3,
    end_char: 149,
    input_type: inputTypeEnum.Lookup,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Music Arrangement',
    field: 'music_arrangement',
    start_char: 149,
    size: 3,
    end_char: 152,
    input_type: inputTypeEnum.Lookup,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Lyric Adaptation',
    field: 'lyric_adaptation',
    start_char: 152,
    size: 3,
    end_char: 155,
    input_type: inputTypeEnum.Lookup,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Grand Rights Ind',
    field: 'grand_rights_ind',
    start_char: 155,
    size: 1,
    end_char: 156,
    input_type: inputTypeEnum.Boolean,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Composite Component Count',
    field: 'composite_component_count',
    start_char: 156,
    size: 3,
    end_char: 159,
    input_type: inputTypeEnum.Numeric,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Date of publication of printed edition',
    field: 'date_of_publication_of_printed_edition',
    start_char: 159,
    size: 8,
    end_char: 167,
    input_type: inputTypeEnum.Date,
    is_required: false,
    tag: 'free_text_date',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Opus Number',
    field: 'opus_number',
    start_char: 167,
    size: 25,
    end_char: 192,
    input_type: inputTypeEnum.Alpha,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
  {
    description: 'Catalogue Number',
    field: 'catalogue_number',
    start_char: 192,
    size: 25,
    end_char: 217,
    input_type: inputTypeEnum.Alpha,
    is_required: false,
    tag: 'free_text',
    version: versionAvailable.v300,
    group_name,
  },
];
