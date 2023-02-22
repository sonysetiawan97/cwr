import { controlRecordEnum } from '../../../../enum/control_record';
import { TransactionEnumV21 } from '../../../../enum/transaction';
import { validationMessageEnum } from '../../../../enum/validation_message';

export const validationTRLLevel = async (text: string, data: string[]): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (!groupIdMustEqualToGroupTotal(data)) return reject(rejectedMessage());
    if (!groupIDMustSequence(data)) return reject(rejectedMessage());
    if (!recordCountMustEqualWithNumberPhysicInclusiveHdrTrl(data)) return reject(rejectedMessage());

    return resolve(true);
  });
};

const rejectedMessage = (): string => {
  return validationMessageEnum.TRLLEVEL;
};

const groupIdMustEqualToGroupTotal = (data: string[]): boolean => {
  const groupIds: string[] = data.filter((item) => {
    const tag = item.slice(0, 3);
    return tag === controlRecordEnum.GRH;
  });
  const { length } = groupIds;

  const trl = data[data.length - 1];
  const groupCount = parseInt(trl.slice(3, 8), 10);

  return groupCount === length;
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

const recordCountMustEqualWithNumberPhysicInclusiveHdrTrl = (data: string[]): boolean => {
  const { length } = data;
  const trl = data[length - 1];
  const recordCount = parseInt(trl.slice(16, 24), 10);

  return length === recordCount;
};
