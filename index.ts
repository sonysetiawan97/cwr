import { decoderFullPath } from './src/decode_cwr';
import { encodeCwr } from './src/encode_cwr';
import { CwrEncode, Cwr } from './src/model/cwr';
import { CWREncode, CWREncodeResult } from './src/model/encode/v21';

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
