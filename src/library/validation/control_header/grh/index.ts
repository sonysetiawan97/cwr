import { controlRecordEnum } from '../../../../enum/control_record';
import { validationMessageEnum } from '../../../../enum/validation_message';
import { ifTagMatchThenCheckValid } from '../../functions';

export const validationGRHLevel = async (text: string, data: string[]): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (!transactionTypeRequiredAndMatchWithTransactionTypeTable(text)) return reject(validationMessageEnum.GRHLEVEL);
    if (!groupIDMustSequence(data)) return reject(validationMessageEnum.GRHLEVEL);
    if (!grhMustFollowByGrtOrHdr(data)) return reject(validationMessageEnum.GRHLEVEL);
    if (!cwrVersionMustVer2(text)) return reject(validationMessageEnum.GRHLEVEL);
    if (!eachTransactionTypeOnlyOneUse(data)) return reject(validationMessageEnum.GRHLEVEL);

    return resolve(true);
  });
};

const transactionTypeRequiredAndMatchWithTransactionTypeTable = (text: string): boolean => {
  const exact = ['ACK', 'WRK', 'ISR', 'EXC', 'ISA', 'LIC', 'DRW'];
  return ifTagMatchThenCheckValid(text, 3, 6, exact);
};

const groupIDMustSequence = (data: string[]): boolean => {
  const groupIds: string[] = data.filter((item) => {
    return item.slice(0, 3) !== controlRecordEnum.GRH;
  });

  const sequence: number[] = groupIds.map((item) => {
    return parseInt(item.slice(6, 11), 10);
  });

  const { length } = sequence;

  return sequence.every((num, index) => {
    return index === length - 1 || num < sequence[index + 1];
  });
};

const grhMustFollowByGrtOrHdr = (data: string[]): boolean => {
  return true;
};

const cwrVersionMustVer2 = (text: string, mustExact: string = '02.10'): boolean => {
  return ifTagMatchThenCheckValid(text, 11, 16, mustExact);
};

const eachTransactionTypeOnlyOneUse = (data: string[]): boolean => {
  const groupIds: string[] = data.filter((item) => {
    return item.slice(0, 3) !== controlRecordEnum.GRH;
  });

  const sequence: string[] = groupIds.map((item) => {
    return item.slice(3, 6);
  });

  return hasDuplicates(sequence);
};

function hasDuplicates(data: string[]) {
  return new Set(data).size !== data.length;
}
