# CWR ENCODE - DECODE

## Decode
```
import { DecodeCwr } from  'cwr-lib'

async function decode(fullpath) {
  const result = await DecodeCwr(fullpath)
  console.log(result)
}
```
Result of DecodeCwr() is json and required on fullpath param
DecodeCwr(fullpath: string) => need fullpath of cwr file.

## Encode
```
import { EncodeCwr } from  'cwr-lib'

async function encode(data) {
  const result = await EncodeCwr(data)
  console.log(result)
}
```
Result of EncodeCwr() is string and required on json param.
EncodeCwr(data: {}) => need object with Json format.
### Json format
```
filename: {
  sequence: number,
  society: string,
  receiver: string,
  version: V21 | V3-0-0,
},
controlHeader: {
  hdr: {
	record_type: string,
	sender_type: string,
	sender_id: number,
	sender_name: string,
	edi_standard_version_number: string,
	creation_date: string with format yyyy/mm/dd,
	creation_time: string with format hh:mm:ss,
	transmission_date: string with format yyyy/mm/dd,
	character_set: string,
  },
  grh: {
    record_type:  string,
    transaction_type: string,
    type_group_id: number,
    version_number_for_this_transaction_type: string,
    batch_request:  number,
    submission_or_distribution_type:  string,
  },
  grt: {
    record_type: string,
    group_id:  number,
    transaction_count: number,
    record_count: number,
  },
  trl: {
    record_type:  string,
    group_id: number,
    transaction_count: number,
    record_count: number,
  },
},
transactions: [
  {
	parent: {
	  tag: string,
	  detail: {},
	},
	children: [
	  {
	    parent: {
	      tag: string,
	      detail: {},
	    },
	    children: [{}]
	  },
	  ...
	],
  },
  ...
]
```
