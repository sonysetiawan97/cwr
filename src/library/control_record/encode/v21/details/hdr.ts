import { controlRecordEnum } from '../../../../../enum/control_record';
import { versionAvailable } from '../../../../../enum/version';
import { HDRVer21 } from '../../../../../model/control_record';
import { Mapper } from '../../../../../model/mapper';
import { getDataMapper } from '../../../../fetch/get';

export const encodeHDRVer21 = async (data: HDRVer21): Promise<string> => {
  const version: versionAvailable = versionAvailable.v21;
  const group_name: controlRecordEnum = controlRecordEnum.HDR;
  const stacks: Mapper[] = await getDataMapper(version, group_name);

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
