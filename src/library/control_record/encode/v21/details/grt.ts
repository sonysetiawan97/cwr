import { controlRecordEnum } from '../../../../../enum/control_record';
import { versionAvailable } from '../../../../../enum/version';
import { GRTEncode } from '../../../../../model/encode/v21/control_header';
import { Mapper } from '../../../../../model/mapper';
import { getDataMapper } from '../../../../fetch/get';
import { formatCheckType } from '../../../../formatter';

export const encodeGRTVer21 = async (data: GRTEncode): Promise<string> => {
  const version: versionAvailable = versionAvailable.v21;
  const group_name: controlRecordEnum = controlRecordEnum.GRT;
  const stacks: Mapper[] = await getDataMapper(version, group_name);

  return stacks
    .map((item) => {
      const { size, field, input_type } = item;
      const text = data[field as keyof GRTEncode].toString();
      return formatCheckType(text, size, input_type);
    })
    .join('');
};
