import { decoderFullPath } from './decode_cwr';
import { encodeCwr } from './encode_cwr';
import { CwrEncode, CwrEncodeData, Cwr } from './model/cwr';
import { EncodeFileNamingV21 } from './model/filename';
import * as path from 'path';

export const DecodeCwr = async (fullpath: string) => {
  const decode: Cwr = await decoderFullPath(fullpath);
  return decode;
};

export const EncodeCwr = async (filename: EncodeFileNamingV21, data: CwrEncodeData): Promise<CwrEncode> => {
  try {
    const result: CwrEncode = await encodeCwr(filename, data);
    return result;
  } catch (e) {
    throw e;
  }
};
