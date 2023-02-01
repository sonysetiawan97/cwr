import { inputTypeEnum } from '../../enum/input_type';
import { formatDateType } from './date';
import { formatNumberType } from './number';
import { formatStringType } from './text';
import { formatTimeType } from './time';

export const formatCheckType = (text: string | number, size: number, input_type: string) => {
  if (input_type == inputTypeEnum.Numeric) {
    return formatNumberType(parseInt(text.toString()), size);
  }

  if (input_type == inputTypeEnum.Date) {
    return formatDateType(text.toString(), size);
  }

  if (input_type == inputTypeEnum.Time) {
    return formatTimeType(text.toString(), size);
  }

  return formatStringType(text.toString(), size);
};
