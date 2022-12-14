import { fetch } from './database/select';
import { cwr, cwrForm } from './model/cwr';
import { Filename, FileNaming, FormFileNaming } from './model/filename';
import * as fs from 'fs';

export const decoderFullPath = async (path: string): Promise<cwr> => {
  return new Promise(async (resolve, reject) => {
    const file = fs.readFileSync(path);

    const pathArray: Array<string> = path.split('/');
    const filename: string = pathArray[pathArray.length - 1];

    if (file && filename) {
      const fileNaming: FileNaming = await decodeFileName(filename);

      const result = {
        ...cwrForm,
        fileNaming: {
          ...fileNaming,
        },
      };

      return resolve(result);
    }
    return reject('Something happen.');
  });
};

const decodeFileName = async (filename: string) => {
  const version = filename.slice(16, 19);
  const stacks = (await fetch('filename')) as Array<Filename>;
  let result: FileNaming = { ...FormFileNaming, version };

  stacks.map((stack) => {
    const { field, start_char, end_char } = stack;
    const name: string = field;
    const start: number = start_char - 1;
    const end: number = end_char - 1;
    const value: string = filename.slice(start, end);
    result = {
      ...result,
      [name]: value,
    };
  });

  return result;
};
