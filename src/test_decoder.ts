import { DecodeCwr, EncodeCwr } from './index';
import { CwrEncode, CwrEncodeData, Cwr } from './model/cwr';
import { EncodeFileNamingV21 } from './model/filename';
import { filename, data } from './__files__/cwr';
import * as path from 'path';
import * as fs from 'fs';

const fileName = 'CW200046026_MME.V21';
const bucket = '/__files__/';
const fullpath = __dirname + `${bucket}${fileName}`;

const basePathResult = '__result__';

const decode = async (fullpath: string): Promise<Cwr> => {
  try {
    const result: Cwr = await DecodeCwr(fullpath);

    const filePath = path.join(__dirname, `/${basePathResult}/decode/result.json`);

    fs.writeFileSync(filePath, JSON.stringify(result));

    return result;
  } catch (e) {
    throw e;
  }
};

const encode = async (filename: EncodeFileNamingV21, data: CwrEncodeData): Promise<CwrEncode> => {
  try {
    const result: CwrEncode = await EncodeCwr(filename, data);

    const filePath = path.join(__dirname, `/${basePathResult}/encode/${result.filename}`);

    fs.writeFileSync(filePath, result.data);

    return result;
  } catch (e) {
    throw e;
  }
};

const startDate = new Date();
console.log(`${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()}:${startDate.getMilliseconds()}`);

decode(fullpath);

const midTime = new Date();
console.log(`${midTime.getHours()}:${midTime.getMinutes()}:${midTime.getSeconds()}:${midTime.getMilliseconds()}`);

encode(filename, data);

const endDate = new Date();
console.log(`${endDate.getHours()}:${endDate.getMinutes()}:${endDate.getSeconds()}:${endDate.getMilliseconds()}`);