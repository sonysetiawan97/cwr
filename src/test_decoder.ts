import { DecodeCwr, EncodeCwr, EncodeCwrMultipleGroup, DecodeCwrMultipleGroup } from './index';
import { Cwr } from './model/cwr';
import { cwr } from './__files__/cwr';
import { cwrMultipleGroup } from './__files__/cwr_multiple_group';
import * as path from 'path';
import * as fs from 'fs';
import { CWREncode, CWREncodeResult, CwrEncodeMultipleGroup } from './model/encode/v21';
import { CWRDecodeResultModel } from './model/decode/v21';

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

const decodeMultipleGroup = async (fullpath: string): Promise<CWRDecodeResultModel> => {
  try {
    const result: CWRDecodeResultModel = await DecodeCwrMultipleGroup(fullpath);

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

const encodeMultipleGroup = async (data: CwrEncodeMultipleGroup): Promise<CWREncodeResult> => {
  try {
    const result: CWREncodeResult = await EncodeCwrMultipleGroup(data);

    const filePath = path.join(__dirname, `/${basePathResult}/encode/${result.filename}`);

    fs.writeFileSync(filePath, result.data);

    return result;
  } catch (e) {
    throw e;
  }
};

// const filePath = path.join(__dirname, `/${basePathResult}/encode/cwr_multiple_group.json`);
// fs.writeFileSync(filePath, JSON.stringify(cwrMultipleGroup));

// decode(fullpath);
decodeMultipleGroup(fullpath);
// encode(cwr);
// encodeMultipleGroup(cwrMultipleGroup);
