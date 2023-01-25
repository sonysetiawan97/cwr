import { controlRecordEnum } from '../enum/control_record';
import { TagHeaderEnum } from '../enum/type_tag';
import { versionAvailable } from '../enum/version';
import { TagHeaderTable } from '../model/control_record';

export const tag_header: TagHeaderTable[] = [
  {
    tag: controlRecordEnum.HDR,
    type: TagHeaderEnum.CONTROL_HEADER,
    version: versionAvailable.v21,
  },
  {
    tag: controlRecordEnum.GRH,
    type: TagHeaderEnum.CONTROL_HEADER,
    version: versionAvailable.v21,
  },
  {
    tag: controlRecordEnum.GRT,
    type: TagHeaderEnum.CONTROL_HEADER,
    version: versionAvailable.v21,
  },
  {
    tag: controlRecordEnum.TRL,
    type: TagHeaderEnum.CONTROL_HEADER,
    version: versionAvailable.v21,
  },
];
