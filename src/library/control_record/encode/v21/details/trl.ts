import { controlRecordEnum } from '../../../../../enum/control_record';
import { versionAvailable } from '../../../../../enum/version';
import { TRLVer21 } from '../../../../../model/control_record';
import { Mapper } from '../../../../../model/mapper';
import { getDataMapper } from '../../../../fetch/get';

export const encodeTRLVer21 = async (data: TRLVer21): Promise<string> => {
  const version: versionAvailable = versionAvailable.v21;
  const group_name: controlRecordEnum = controlRecordEnum.TRL;
  const stacks: Mapper[] = await getDataMapper(version, group_name);

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
