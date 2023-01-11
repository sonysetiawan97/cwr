import { decoderFullPath } from './decode_cwr';
import { encodeCwr } from './encode_cwr';
import { CwrEncode, CwrEncodeData, cwr } from './model/cwr';
import { EncodeFileNamingV21 } from './model/filename';
import * as path from 'path';

export const DecodeCwr = async (fullpath: string) => {
  const decode: cwr = await decoderFullPath(fullpath);
  return decode;
};

export const EncodeCwr = async (filename: EncodeFileNamingV21, data: CwrEncodeData): Promise<CwrEncode> => {
  try {
    const result: CwrEncode = await encodeCwr(filename, data);

    console.log(path.basename(__dirname));
    console.log(path.dirname(__dirname));

    return result;
  } catch (e) {
    throw e;
  }
};
