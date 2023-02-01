import { CwrEncodeControlHeader } from './control_header';
import { CwrEncodeFilename } from './filename';

export interface CWREncode {
  filename: CwrEncodeFilename;
  controlHeader: CwrEncodeControlHeader;
}

export interface CWREncodeResult {
  filename: string;
  data: string;
}

export const CwrEncodeResultForm: CWREncodeResult = {
  filename: '',
  data: '',
};
