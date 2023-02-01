import { controlRecordEnum } from '../../../../../enum/control_record';
import { versionAvailable } from '../../../../../enum/version';
import { HDREncode } from '../../../../../model/encode/v21/control_header';
import { Mapper } from '../../../../../model/mapper';
import { getDataMapper } from '../../../../fetch/get';
import { formatCheckType } from '../../../../formatter';

export const encodeHDRVer21 = async (data: HDREncode): Promise<string> => {
  const version: versionAvailable = versionAvailable.v21;
  const group_name: controlRecordEnum = controlRecordEnum.HDR;
  const stacks: Mapper[] = await getDataMapper(version, group_name);

  return stacks
    .map((item) => {
      const { input_type, size, field } = item;
      const text = data[field as keyof HDREncode];
      return formatCheckType(text, size, input_type);
    })
    .join('');
};
