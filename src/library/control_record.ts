import {
  FormGRHVer21,
  FormGRHVer300,
  FormGRTVer21,
  FormGRTVer300,
  FormHDRVer21,
  FormHDRVer300,
  FormTRLVer21,
  FormTRLVer300,
  GRHVer21,
  GRHVer300,
  GRTVer21,
  GRTVer300,
  HDRVer21,
  HDRVer300,
  TRLVer21,
  TRLVer300,
} from '../model/control_record';
import { versionAvailable } from '../enum/version';
import { Params, Where } from '../model/model';
import { getData } from '../database/select';
import { Mapper } from '../model/mapper';
import { controlRecordEnum } from '../enum/control_record';

export const decodeHdr = async (text: string, version: versionAvailable): Promise<HDRVer21 | HDRVer300 | null> => {
  if (version === versionAvailable.v21) {
    return await hdrVer21(text);
  }

  if (version === versionAvailable.v300) {
    return await hdrVer300(text);
  }

  return null;
};

export const decodeGrh = async (text: string, version: versionAvailable): Promise<GRHVer21 | GRHVer300 | null> => {
  if (version === versionAvailable.v21) {
    return await grhVer21(text);
  }

  if (version === versionAvailable.v300) {
    return await grhVer300(text);
  }

  return null;
};

export const decodeGrt = async (text: string, version: versionAvailable): Promise<GRTVer21 | GRTVer300 | null> => {
  if (version === versionAvailable.v21) {
    return await grtVer21(text);
  }

  if (version === versionAvailable.v300) {
    return await grtVer300(text);
  }

  return null;
};

export const decodeTrl = async (text: string, version: versionAvailable): Promise<TRLVer21 | TRLVer300 | null> => {
  if (version === versionAvailable.v21) {
    return await trlVer21(text);
  }

  if (version === versionAvailable.v300) {
    return await trlVer300(text);
  }

  return null;
};

/**
 * decoder for HDR Ver 2.1
 * @param text
 * @returns
 */
const hdrVer21 = async (text: string): Promise<HDRVer21> => {
  let result: HDRVer21 = { ...FormHDRVer21 };

  const table: string = 'mapper';
  const version: string = versionAvailable.v21;
  const group_name: string = controlRecordEnum.HDR;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;

  stacks.map((stack) => {
    const { field, start_char, end_char } = stack;
    const name: string = field;
    const start: number = start_char - 1;
    const end: number = end_char - 1;
    const value: string = text.slice(start, end);
    result = {
      ...result,
      [name]: value,
    };
  });

  return result;
};

/**
 * decoder for HDR Ver 3.0.0
 * @param text
 * @returns
 */
const hdrVer300 = async (text: string): Promise<HDRVer300> => {
  let result: HDRVer300 = { ...FormHDRVer300 };

  const table: string = 'mapper';
  const version: string = versionAvailable.v300;
  const group_name: string = controlRecordEnum.HDR;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;

  stacks.map((stack) => {
    const { field, start_char, end_char } = stack;
    const name: string = field;
    const start: number = start_char - 1;
    const end: number = end_char - 1;
    const value: string = text.slice(start, end);
    result = {
      ...result,
      [name]: value,
    };
  });

  return result;
};

/**
 * decoder for GRH ver 2.1
 * @param text
 * @returns
 */
const grhVer21 = async (text: string): Promise<GRHVer21> => {
  let result: GRHVer21 = { ...FormGRHVer21 };

  const table: string = 'mapper';
  const version: string = versionAvailable.v21;
  const group_name: string = controlRecordEnum.GRH;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;

  stacks.map((stack) => {
    const { field, start_char, end_char } = stack;
    const name: string = field;
    const start: number = start_char - 1;
    const end: number = end_char - 1;
    const value: string = text.slice(start, end);
    result = {
      ...result,
      [name]: value,
    };
  });

  return result;
};

/**
 * decoder for GRH ver 3.0.0
 * @param text
 * @returns
 */
const grhVer300 = async (text: string): Promise<GRHVer300> => {
  let result: GRHVer300 = { ...FormGRHVer300 };

  const table: string = 'mapper';
  const version: string = versionAvailable.v300;
  const group_name: string = controlRecordEnum.GRH;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;

  stacks.map((stack) => {
    const { field, start_char, end_char } = stack;
    const name: string = field;
    const start: number = start_char - 1;
    const end: number = end_char - 1;
    const value: string = text.slice(start, end);
    result = {
      ...result,
      [name]: value,
    };
  });

  return result;
};

/**
 * decoder for GRT ver 2.1
 * @param text
 * @returns
 */
const grtVer21 = async (text: string): Promise<GRTVer21> => {
  let result: GRTVer21 = { ...FormGRTVer21 };

  const table: string = 'mapper';
  const version: string = versionAvailable.v21;
  const group_name: string = controlRecordEnum.GRT;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;

  stacks.map((stack) => {
    const { field, start_char, end_char } = stack;
    const name: string = field;
    const start: number = start_char - 1;
    const end: number = end_char - 1;
    const value: string = text.slice(start, end);
    result = {
      ...result,
      [name]: value,
    };
  });

  return result;
};

/**
 * decoder for GRT ver 3.0.0
 * @param text
 * @returns
 */
const grtVer300 = async (text: string): Promise<GRTVer300> => {
  let result: GRTVer300 = { ...FormGRTVer300 };

  const table: string = 'mapper';
  const version: string = versionAvailable.v300;
  const group_name: string = controlRecordEnum.GRT;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;

  stacks.map((stack) => {
    const { field, start_char, end_char } = stack;
    const name: string = field;
    const start: number = start_char - 1;
    const end: number = end_char - 1;
    const value: string = text.slice(start, end);
    result = {
      ...result,
      [name]: value,
    };
  });

  return result;
};

/**
 * decoder for TRL ver 2.1
 * @param text
 * @returns
 */
const trlVer21 = async (text: string): Promise<TRLVer21> => {
  let result: TRLVer21 = { ...FormTRLVer21 };

  const table: string = 'mapper';
  const version: string = versionAvailable.v21;
  const group_name: string = controlRecordEnum.TRL;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;

  stacks.map((stack) => {
    const { field, start_char, end_char } = stack;
    const name: string = field;
    const start: number = start_char - 1;
    const end: number = end_char - 1;
    const value: string = text.slice(start, end);
    result = {
      ...result,
      [name]: value,
    };
  });

  return result;
};

/**
 * decoder for TRL ver 3.0.0
 * @param text
 * @returns
 */
const trlVer300 = async (text: string): Promise<TRLVer300> => {
  let result: TRLVer300 = { ...FormTRLVer300 };

  const table: string = 'mapper';
  const version: string = versionAvailable.v300;
  const group_name: string = controlRecordEnum.TRL;
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;

  stacks.map((stack) => {
    const { field, start_char, end_char } = stack;
    const name: string = field;
    const start: number = start_char - 1;
    const end: number = end_char - 1;
    const value: string = text.slice(start, end);
    result = {
      ...result,
      [name]: value,
    };
  });

  return result;
};
