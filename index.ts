import { decoderFullPath } from './lib/decode_cwr';
import { encodeCwr } from './lib/encode_cwr';
import { CwrEncode, Cwr } from './lib/model/cwr';
import { CWREncode, CWREncodeResult } from './lib/model/encode/v21';

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
