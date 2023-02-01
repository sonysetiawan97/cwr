import { getData } from '../database/select';
import {
  EncodeFileNamingV21,
  Filename,
  FileNamingV21,
  FileNamingV30,
  FormFileNamingV21,
  FormFileNamingV30,
} from '../model/filename';
import { Params, Where } from '../model/model';
import { versionAvailable } from '../enum/version';
import { CwrEncodeFilename } from '../model/encode/v21/filename';

export const decodeFileName = async (filename: string): Promise<FileNamingV21 | FileNamingV30 | null> => {
  const availableVersion: string[] = ['.V21', '_V3-0-0.'];
  const [version] = availableVersion.filter((item) => {
    const regex = new RegExp(item);
    return regex.test(filename);
  });

  if (version === '.V21') {
    return await fileNameVer21(filename);
  }

  if (version === '_V3-0-0.') {
    return await fileNameVer30(filename);
  }

  return null;
};

export const checkVersion = (filename: string): versionAvailable | null => {
  const availableVersion: string[] = ['.V21', '_V3-0-0.'];
  const [version] = availableVersion.filter((item) => {
    const regex = new RegExp(item);
    return regex.test(filename);
  });

  if (version === '.V21') {
    return versionAvailable.v21;
  }

  if (version === '_V3-0-0.') {
    return versionAvailable.v300;
  }

  return null;
};

export const encodeFileName = (filename: CwrEncodeFilename): string => {
  const { version } = filename;
  if (version === versionAvailable.v21) {
    return createFileNameVer21(filename);
  } else if (version === versionAvailable.v300) {
    return '';
  }

  return '';
};

const fileNameVer21 = async (filename: string): Promise<FileNamingV21> => {
  const table: string = 'filename';
  const version: string = versionAvailable.v21;
  let result: FileNamingV21 = { ...FormFileNamingV21, version };
  const where: Where = {
    version,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Filename[];

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

const fileNameVer30 = async (filename: string): Promise<FileNamingV30> => {
  const table: string = 'filename';
  const version = versionAvailable.v300;
  let result: FileNamingV30 = { ...FormFileNamingV30 };
  const where: Where = {
    version,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Filename[];

  stacks.map((stack) => {
    const { field, start_char, end_char, size } = stack;

    if (size !== 0) {
      const start: number = start_char - 1;
      const end: number = end_char - 1;
      const value = filename.slice(start, end);
      result = {
        ...result,
        [field]: value,
      };
    }

    if (field === 'submitter') {
      const value = filename.slice(8, filename.indexOf('_'));
      result = {
        ...result,
        [field]: value,
      };
    }

    if (field === 'recepient') {
      const value = filename.slice(filename.indexOf('_') + 1, filename.lastIndexOf('_'));
      result = {
        ...result,
        [field]: value,
      };
    }

    if (field === 'version') {
      const value = filename.slice(filename.lastIndexOf('_') + 1, filename.lastIndexOf('.')).slice(0, 4);
      result = {
        ...result,
        [field]: value,
      };
    }

    if (field === 'revision') {
      const value = filename.slice(filename.lastIndexOf('_') + 1, filename.lastIndexOf('.')).slice(5);
      result = {
        ...result,
        [field]: value,
      };
    }

    if (field === 'ext') {
      const value = filename.slice(filename.lastIndexOf('.') + 1);
      result = {
        ...result,
        [field]: value,
      };
    }
  });

  return result;
};

const createFileNameVer21 = (filename: CwrEncodeFilename): string => {
  const date = new Date();
  const identity = 'CW';
  const year = date.getFullYear().toString().substring(2);
  const receiver = `_${filename.receiver}`;
  const version = `.${filename.version}`;
  const sequence = ('0000' + filename.sequence).slice(-4);
  const file: FileNamingV21 = { ...FormFileNamingV21, ...filename, year, identity, sequence, receiver, version };

  return Object.values(file)
    .map((item) => item)
    .join('');
};
