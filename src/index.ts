import { decoderFullPath } from './decode_cwr';
import { encodeCwr } from './encode_cwr';
import { CwrEncode, Cwr } from './model/cwr';
import { CWREncode, CWREncodeResult } from './model/encode/v21';

export const DecodeCwr = async (fullpath: string) => {
  const decode: Cwr = await decoderFullPath(fullpath);
  return decode;
};

export const EncodeCwr = async (data: CWREncode): Promise<CWREncodeResult> => {
  try {
    const result: CwrEncode = await encodeCwr(data);
    return result;
  } catch (e) {
    throw e;
  }
};
