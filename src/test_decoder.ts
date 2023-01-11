import { DecodeCwr, EncodeCwr } from './index';
import { CwrEncode, CwrEncodeData, cwr } from './model/cwr';
import { EncodeFileNamingV21 } from './model/filename';
import { filename, data } from './__files__/cwr';
import * as fs from 'fs';

const fileName = 'CW200046026_MME.V21';
// const fileName = 'CW170037SA_058_V3-0-0.SUB';
const bucket = '/__files__/';
const fullpath = __dirname + `${bucket}${fileName}`;

export const decode = async (fullpath: string): Promise<cwr> => {
  try {
    const result: cwr = await DecodeCwr(fullpath);
    return result;
  } catch (e) {
    throw e;
  }
};

export const encode = async (filename: EncodeFileNamingV21, data: CwrEncodeData): Promise<CwrEncode> => {
  try {
    const result: CwrEncode = await EncodeCwr(filename, data);
    return result;
  } catch (e) {
    throw e;
  }
};

// decode(fullpath);
encode(filename, data);
