import { decoderFullPath } from './decode';

const fileName = 'CW200046026_MME.V21';
const bucket = '/__files__/';
const fullpath = __dirname + `${bucket}${fileName}`;

export const decode = async (fullpath: string) => {
  const decode = await decoderFullPath(fullpath);
  return decode;
};

decode(fullpath);
