import { decoderFullPath } from './decode';

const fileName = 'CW200046026_MME.V21';
// const fileName = 'CW170037SA_058_V3-0-0.SUB';
const bucket = '/__files__/';
const fullpath = __dirname + `${bucket}${fileName}`;

export const decode = async (fullpath: string) => {
  try {
    const decode = await decoderFullPath(fullpath);
    // console.log(decode);
    return decode;
  } catch (e) {
    throw e;
  }
};

decode(fullpath);
