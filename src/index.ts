import { decoderFullPath } from './decode_cwr';
import { encodeCwr } from './encode_cwr';
import { encodeCwrMultipleGroup } from './encode_cwr_multiple_group';
import { CwrEncode, Cwr } from './model/cwr';
import { CWREncode, CWREncodeResult, CwrEncodeMultipleGroup } from './model/encode/v21';

export const DecodeCwr = async (fullpath: string) => {
  try {
    const decode: Cwr = await decoderFullPath(fullpath);
    return decode;
  } catch (e) {
    throw e;
  }
};

export const EncodeCwr = async (data: CWREncode): Promise<CWREncodeResult> => {
  try {
    const result: CwrEncode = await encodeCwr(data);
    return result;
  } catch (e) {
    throw e;
  }
};

export const EncodeCwrMultipleGroup = async (data: CwrEncodeMultipleGroup): Promise<CWREncodeResult> => {
  try {
    const result: CwrEncode = await encodeCwrMultipleGroup(data);
    return result;
  } catch (e) {
    throw e;
  }
}