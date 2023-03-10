import { DecodeCwr, EncodeCwr } from './index';
import { Cwr } from './model/cwr';
import { EncodeFileNamingV21 } from './model/filename';
import { cwr } from './__files__/cwr';
import * as path from 'path';
import * as fs from 'fs';
import { CWREncode, CWREncodeResult } from './model/encode/v21';

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

const encode = async (data: CWREncode): Promise<CWREncodeResult> => {
  try {
    const result: CWREncodeResult = await EncodeCwr(data);

    const filePath = path.join(__dirname, `/${basePathResult}/encode/${result.filename}`);

    fs.writeFileSync(filePath, result.data);

    return result;
  } catch (e) {
    throw e;
  }
};

decode(fullpath);
encode(cwr);
