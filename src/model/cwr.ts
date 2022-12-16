import { FileNamingV21, FileNamingV30 } from './filename';
import { ControlRecord } from './control_record';

export interface cwr {
  file_naming: FileNamingV21 | FileNamingV30 | null;
  control_record: ControlRecord | null;
}

export const cwrForm: cwr = {
  file_naming: null,
  control_record: null,
};
