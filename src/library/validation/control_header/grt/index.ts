import { controlRecordEnum } from '../../../../enum/control_record';
import { validationMessageEnum } from '../../../../enum/validation_message';

export const validationGRTLevel = async (text: string, data: string[]): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (!groupIdMustEqualToGroupIdGrh(data)) return reject(validationMessageEnum.GRTLEVEL);

    return resolve(true);
  });
};

const groupIdMustEqualToGroupIdGrh = (data: string[]): boolean => {
  let valid: boolean = true;
  const groupIds: string[] = data.filter((item) => {
    const tag = item.slice(0, 3);
    return tag !== controlRecordEnum.GRH && tag !== controlRecordEnum.GRT;
  });

  const { length } = groupIds;

  for (let x = 0; x <= length; x++) {
    if ((x === 0 || x % 2 === 0) && valid) {
      const grh = groupIds[x];
      const grt = groupIds[x + 1];

      const groupIdGrh = grh.slice(6, 11);
      const groupIdGrt = grt.slice(3, 8);

      valid = groupIdGrh === groupIdGrt;
    }
  }

  return valid;
};

const groupIDMustSequence = (data: string[]): boolean => {
  const groupIds: string[] = data.filter((item) => {
    return item.slice(0, 3) !== controlRecordEnum.GRH;
  });

  const sequence: number[] = groupIds.map((item) => {
    return parseInt(item.slice(6, 11));
  });

  const { length } = sequence;

  return sequence.every((num, index) => {
    return index === length - 1 || num < sequence[index + 1];
  });
};
