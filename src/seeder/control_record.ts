import { controlRecordEnum } from '../enum/control_record';
import { versionAvailable } from '../enum/version';
import { ControlRecordTable } from '../model/control_record';

export const control_record: ControlRecordTable[] = [
  {
    tag: controlRecordEnum.HDR,
    version: versionAvailable.v21,
  },
  {
    tag: controlRecordEnum.GRH,
    version: versionAvailable.v21,
  },
  {
    tag: controlRecordEnum.GRT,
    version: versionAvailable.v21,
  },
  {
    tag: controlRecordEnum.TRL,
    version: versionAvailable.v21,
  },
];
