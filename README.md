# CWR ENCODE - DECODE

## Decode
```
import { DecodeCwrMultipleGroup } from  'cwr-lib'

async function decode(fullpath) {
  const result = await DecodeCwrMultipleGroup(fullpath)
  console.log(result)
}
```
Result of DecodeCwrMultipleGroup() is json and required on fullpath param
DecodeCwrMultipleGroup(fullpath: string) => need fullpath of cwr file.

## Encode
```
import { EncodeCwrMultipleGroup } from  'cwr-lib'

async function encode(data) {
  const result = await EncodeCwrMultipleGroup(data)
  console.log(result)
}
```
Result of EncodeCwrMultipleGroup() is string and required on json param.
EncodeCwrMultipleGroup(data: {}) => need object with Json format.
### Json format
```
import { CwrEncodeMultipleGroup } from '../model/encode/v21';

export const cwrMultipleGroup: CwrEncodeMultipleGroup = {
  filename: {
    sequence: 92,
    society: 'MME',
    receiver: '8',
    version: 'V21',
  },
  transactions: {
    hdr: {
      record_type: 'HDR',
      sender_type: 'SO',
      sender_id: 8,
      sender_name: 'APRA',
      edi_standard_version_number: '01.10',
      creation_date: '2023/04/14',
      creation_time: '05:57:36',
      transmission_date: '2023/04/14',
      character_set: '',
    },
    group: [
      {
        detail: {
          record_type: 'GRH',
          transaction_type: 'NWR',
          type_group_id: 1,
          version_number_for_this_transaction_type: '02.10',
          batch_request: 92,
          submission_or_distribution_type: '',
        },
        transaction: [
          [
            {
              parent: {
                tag: 'NWR',
                detail: {
                  record_prefix: '',
                  work_title: 'CERITA LAUT',
                  language_code: 'aa',
                  submitter_work: '10540',
                  iswc: '           ',
                  copyright_date: '2021-07-22T17:00:00.000Z',
                  copyright_number: '',
                  musical_work_distribution_category: 'POP',
                  duration: '00252',
                  recorded_indicator: 'Y',
                  text_music_relationship: 'MTX',
                  composite_type: '',
                  version_type: 'original',
                  excerpt_type: 'MOV',
                  music_arrangement: '',
                  lyric_adaptation: '',
                  contact_name: 'ALDRI',
                  contact_id: '123232',
                  cwr_work_type: 'PP',
                  grand_rights_ind: 'N',
                  composite_component_count: '000',
                  date_of_publication_of_printed_edition: '00000000',
                  exceptional_clause: 'U',
                  opus_number: '                         ',
                  catalogue_number: '                         ',
                  priority_flag: 'Y',
                },
              },
              children: [
                {
                  parent: {
                    tag: 'SPU',
                    detail: {
                      record_prefix: '',
                      publisher_sequence: '01',
                      interested_party: 'NAPU',
                      publisher_name: 'NAGASWARA PUBLISHERINDO',
                      publisher_unknown_indicator: '',
                      publisher_type: 'OP',
                      tax_id: '000000000',
                      publisher_ipi_name: '00616861142',
                      submitter_agreement_number: '              ',
                      pr_affiliation_society: '',
                      pr_ownership_share: 40,
                      mr_society: '',
                      mr_ownership_share: 40,
                      sr_society: '',
                      sr_ownership_share: 0,
                      special_agreements_indicator: '',
                      first_recording_refusal_ind: 'N',
                      filler: '',
                      publisher_ipi_base_number: '',
                      international_standard_agreement_code: '',
                      society_assigned_agreement_number: '',
                      agreement_type: '',
                      usa_license_ind: '',
                    },
                  },
                },
                {
                  parent: {
                    tag: 'SPT',
                    detail: {
                      record_prefix: '',
                      interested_party: 'NAPU',
                      constant: '      ',
                      pr_collection_share: 30,
                      mr_collection_share: 50,
                      sr_collection_share: 0,
                      inclusion_exclusion_indicator: 'include',
                      tis_numeric_code: '0360',
                      shares_change: 'N',
                      sequence: '01',
                    },
                  },
                },
                {
                  parent: {
                    tag: 'OPU',
                    detail: {
                      record_prefix: '',
                      publisher_sequence: '01',
                      interested_party: 'MANS',
                      publisher_name: 'MUSIKA NADA SUARA',
                      publisher_unknown_indicator: ' ',
                      publisher_type: 'SU',
                      tax_id: '000000000',
                      publisher_ipi_name: '',
                      submitter_agreement_number: '              ',
                      pr_affiliation_society: '',
                      pr_ownership_share: 0,
                      mr_society: '',
                      mr_ownership_share: 10,
                      sr_society: '',
                      sr_ownership_share: 0,
                      special_agreements_indicator: ' ',
                      first_recording_refusal_ind: 'N',
                      filler: '',
                      publisher_ipi_base_number: '',
                      international_standard_agreement_code: '',
                      society_assigned_agreement_number: '',
                      agreement_type: '',
                      usa_license_ind: '',
                    },
                  },
                },
                {
                  parent: {
                    tag: 'OPT',
                    detail: {
                      record_prefix: '',
                      interested_party: 'MANS',
                      constant: '      ',
                      pr_collection_share: 10,
                      mr_collection_share: 20,
                      sr_collection_share: 0,
                      inclusion_exclusion_indicator: 'include',
                      tis_numeric_code: '0360',
                      shares_change: 'N',
                      sequence: '01',
                    },
                  },
                },
                {
                  parent: {
                    tag: 'SWR',
                    detail: {
                      record_prefix: '',
                      interested_party: 'C004',
                      writer_last_name: 'siregar',
                      writer_first_name: 'januar ',
                      writer_unknown_indicator: '',
                      writer_designation_code: 'CA',
                      tax_id: '000000000',
                      writer_ipi_name: '2324243424',
                      pr_affiliation_society: 'ns',
                      pr_ownership_share: 20,
                      mr_society: '01',
                      mr_ownership_share: 10,
                      sr_society: 'ns',
                      sr_ownership_share: 0,
                      reversionary_indicator: '',
                      first_recording_refusal_ind: 'N',
                      work_for_hire_indicator: '',
                      filler: '',
                      writer_ipi_base_number: '2324243424',
                      personal_number: '',
                      usa_license_ind: '',
                    },
                  },
                },
                {
                  parent: {
                    tag: 'SWT',
                    detail: {
                      record_prefix: '',
                      interested_party: 'C004',
                      pr_collection_share: 60,
                      mr_collection_share: 100,
                      sr_collection_share: 0,
                      inclusion_exclusion_indicator: 'include',
                      tis_numeric_code: '0360',
                      shares_change: 'N',
                      sequence: '001',
                    },
                  },
                },
                {
                  parent: {
                    tag: 'PWR',
                    detail: {
                      record_prefix: '',
                      interested_party: 'NAPU',
                      publisher_name: 'NAGASWARA PUBLISHERINDO',
                      submitter_agreement_number: '              ',
                      society_assigned_agreement_number: '              ',
                      writer_ip: 'C004',
                    },
                  },
                },
                {
                  parent: {
                    tag: 'OWR',
                    detail: {
                      record_prefix: '',
                      interested_party: 'C011',
                      writer_last_name: 'pangestu',
                      writer_first_name: 'ririn risda',
                      writer_unknown_indicator: 'N',
                      writer_designation_code: 'AD',
                      tax_id: '000000000',
                      writer_ipi_name: '312312312312',
                      pr_affiliation_society: 'ns',
                      pr_ownership_share: 40,
                      mr_society: 'ns',
                      mr_ownership_share: 40,
                      sr_society: 'ns',
                      sr_ownership_share: 0,
                      reversionary_indicator: '',
                      first_recording_refusal_ind: 'N',
                      work_for_hire_indicator: '',
                      filler: '',
                      writer_ipi_base_number: '312312312312',
                      personal_number: '',
                      usa_license_ind: '',
                    },
                  },
                },
                {
                  parent: {
                    tag: 'OWT',
                    detail: {
                      record_prefix: '',
                      interested_party: 'C011',
                      pr_collection_share: 0,
                      mr_collection_share: 0,
                      sr_collection_share: 0,
                      inclusion_exclusion_indicator: 'include',
                      tis_numeric_code: '0360',
                      shares_change: 'N',
                      sequence: '011',
                    },
                  },
                },
                {
                  parent: {
                    tag: 'PER',
                    detail: {
                      record_prefix: '',
                      performing_artist_last_name: 'risda',
                      performing_artist_first_name: 'rin',
                      performing_artist_ipi_name: '',
                      performing_artist_ipi_base_number: '',
                    },
                  },
                },
                {
                  parent: {
                    tag: 'REC',
                    detail: {
                      record_prefix: '',
                      first_release_date: '2023/04/13',
                      constant_1: '                                                            ',
                      first_release_duration: '00:23:20',
                      constant_2: '     ',
                      first_album_title: 'title 1',
                      first_album_label: 'label 1',
                      first_release_catalog: '                  ',
                      ean: '             ',
                      isrc: '333333',
                      recording_format: '',
                      recording_technique: '',
                      media_type: '',
                    },
                  },
                },
              ],
            },
          ],
        ],
      },
      {
        detail: {
          record_type: 'GRH',
          transaction_type: 'REV',
          type_group_id: 2,
          version_number_for_this_transaction_type: '02.10',
          batch_request: 92,
          submission_or_distribution_type: '',
        },
        transaction: [],
      },
    ],
  },
};
```
