import { controlRecordEnum } from '../../../../enum/control_record';
import { TransactionEnumV21 } from '../../../../enum/transaction';
import { validationMessageEnum } from '../../../../enum/validation_message';
import { ifTagProvideThenAnotherTagRequired } from '../../functions';

export const validationGRTLevel = async (text: string, data: string[]): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (!groupIdMustEqualToGroupIdGrh(data)) return reject(rejectedMessage());
    if (!groupIDMustSequence(data)) return reject(rejectedMessage());
    if (!recordCountMustEqualWithNumberPhysicInclusiveGrhGrt(data)) return reject(rejectedMessage());
    if (!currencyIndicatorMandatoryIfTotalMoneteryValueIsProvide(text)) return reject(rejectedMessage());

    return resolve(true);
  });
};

const rejectedMessage = (): string => {
  return validationMessageEnum.GRTLEVEL;
};

const groupIdMustEqualToGroupIdGrh = (data: string[]): boolean => {
  let valid: boolean = false;
  const groupIds: string[] = data.filter((item) => {
    const tag = item.slice(0, 3);
    return tag === controlRecordEnum.GRT || tag === controlRecordEnum.GRH;
  });

  const { length } = groupIds;

  if (length) {
    valid = true;
    for (let x = 0; x < length; x++) {
      if ((x === 0 || x % 2 === 0) && valid) {
        const grh = groupIds[x];
        const grt = groupIds[x + 1];

        const groupIdGrh = grh.slice(6, 11);
        const groupIdGrt = grt.slice(3, 8);

        valid = groupIdGrh === groupIdGrt;
      }
    }
  }

  return valid;
};

const groupIDMustSequence = (data: string[]): boolean => {
  const groupIds: string[] = data.filter((item) => {
    return item.slice(0, 3) === TransactionEnumV21.ACK;
  });

  const sequence: number[] = groupIds.map((item) => {
    return parseInt(item.slice(6, 11), 10);
  });

  const { length } = sequence;

  return sequence.every((num, index) => {
    return index === length - 1 || num < sequence[index + 1];
  });
};

const recordCountMustEqualWithNumberPhysicInclusiveGrhGrt = (data: string[]): boolean => {
  const indexFirst = data.map((item) => item.slice(0, 3)).indexOf(controlRecordEnum.GRH);
  const lastIndex = data.map((item) => item.slice(0, 3)).indexOf(controlRecordEnum.GRT);
  const grt = data[lastIndex];
  const recordCount = parseInt(grt.slice(16, 24));
  const datas = data.slice(indexFirst, lastIndex + 1);
  const { length } = datas;

  return length === recordCount;
};

const currencyIndicatorMandatoryIfTotalMoneteryValueIsProvide = (text: string): boolean => {
  return ifTagProvideThenAnotherTagRequired(text, 27, 37, 24, 27);
};
