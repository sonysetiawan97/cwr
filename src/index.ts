import { decoderFullPath } from './decode';
import { cwr } from './model/cwr';

export const Decode = async (fullpath: string) => {
  const decode : cwr = await decoderFullPath(fullpath);
  return decode;
};
