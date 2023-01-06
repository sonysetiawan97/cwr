import { getData } from '../../database/select';
import { controlRecordEnum } from '../../enum/control_record';
import { versionAvailable } from '../../enum/version';
import { ControlRecord, GRHVer21, GRTVer21, HDRVer21, TRLVer21 } from '../../model/control_record';
import { Mapper } from '../../model/mapper';
import { Params, Where } from '../../model/model';

export const encodeControlRecord = async (datas: ControlRecord, version: versionAvailable): Promise<Array<string>> => {
  if (version === versionAvailable.v21) {
    const hdrData = datas.hdr as HDRVer21;
    const grhData = datas.grh as GRHVer21;
    const grtData = datas.grt as GRTVer21;
    const trlData = datas.trl as TRLVer21;

    const hdr: string = await encodeHDRVer21(hdrData);
    const grh: string = await encodeGRHVer21(grhData);
    const grt: string = await encodeGRTVer21(grtData);
    const trl: string = await encodeTRLVer21(trlData);

    return [hdr, grh, grt, trl];
  }

  return [];
};

const encodeHDRVer21 = async (data: HDRVer21): Promise<string> => {
  const version: versionAvailable = versionAvailable.v21;
  const group_name: controlRecordEnum = controlRecordEnum.HDR;
  const stacks: Array<Mapper> = await getDataMapper(version, group_name);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof HDRVer21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};

const encodeGRHVer21 = async (data: GRHVer21): Promise<string> => {
  const version: versionAvailable = versionAvailable.v21;
  const group_name: controlRecordEnum = controlRecordEnum.GRH;
  const stacks: Array<Mapper> = await getDataMapper(version, group_name);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof GRHVer21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};

const encodeGRTVer21 = async (data: GRTVer21): Promise<string> => {
  const version: versionAvailable = versionAvailable.v21;
  const group_name: controlRecordEnum = controlRecordEnum.GRT;
  const stacks: Array<Mapper> = await getDataMapper(version, group_name);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof GRTVer21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};

const encodeTRLVer21 = async (data: TRLVer21): Promise<string> => {
  const version: versionAvailable = versionAvailable.v21;
  const group_name: controlRecordEnum = controlRecordEnum.TRL;
  const stacks: Array<Mapper> = await getDataMapper(version, group_name);

  return stacks
    .map((item) => {
      const { size, field } = item;
      const text = data[field as keyof TRLVer21];
      if (text) {
        return text.padEnd(size).substring(0, size);
      }
    })
    .join('');
};

const getDataMapper = async (version: versionAvailable, group_name: controlRecordEnum): Promise<Array<Mapper>> => {
  const table: string = 'mapper';
  const where: Where = {
    version,
    group_name,
  };
  const params: Params = {
    where,
  };
  const stacks = (await getData(table, params)) as Array<Mapper>;
  return stacks;
};
