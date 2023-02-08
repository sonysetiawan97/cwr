import { controlRecordEnum } from '../../../../enum/control_record';
import { validationMessageEnum } from '../../../../enum/validation_message';
import { ifTagDateMustValid, ifTagMatchThenNeedRequiredAnotherTag, ifTagMatchThenValid } from '../../functions';

export const validationGRHLevel = async (text: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (tagMustBeGRH(text)) return resolve(true);
    if (checkSenderType(text)) return resolve(true);
    if (checkSenderIdTypePbWrAa(text)) return resolve(true);
    if (checkSenderIdTypePB(text)) return resolve(true);
    if (checkSenderIdTypeSo(text)) return resolve(true);
    if (checkSenderIdTypeAa(text)) return resolve(true);
    if (checkSenderIdTypeAaSenderName(text)) return resolve(true);
    if (checkEDIStandardVersionNumber(text)) return resolve(true);
    if (checkCreationDate(text)) return resolve(true);
    if (checkTransmisionDate(text)) return resolve(true);
    if (checkSenderIdTypePBSenderName(text)) return resolve(true);
    if (checkSenderIdTypeWR(text)) return resolve(true);

    return reject(validationMessageEnum.GRHLEVEL);
  });
};

const tagMustBeGRH = (text: string): boolean => {
  const mustEqual = controlRecordEnum.GRH;
  return ifTagMatchThenValid(text, 0, 3, mustEqual);
};

const checkSenderType = (text: string): boolean => {
  const mustEqual = ['PB', 'SO', 'WR', 'AA'];
  return ifTagMatchThenValid(text, 0, 3, mustEqual);
};

const checkSenderIdTypePbWrAa = (text: string): boolean => {
  const mustEqual = ['PB', 'WR', 'AA'];
  return ifTagMatchThenNeedRequiredAnotherTag(text, 3, 5, mustEqual, 5, 14);
};

const checkSenderIdTypePBSenderName = (text: string): boolean => {
  const mustEqual = ['PB'];
  return ifTagMatchThenNeedRequiredAnotherTag(text, 3, 5, mustEqual, 14, 59);
};

const checkSenderIdTypePB = (text: string): boolean => {
  const mustEqual = ['PB'];
  return ifTagMatchThenNeedRequiredAnotherTag(text, 3, 5, mustEqual, 5, 14);
};

const checkSenderIdTypeSo = (text: string): boolean => {
  const mustEqual = ['SO'];
  return ifTagMatchThenNeedRequiredAnotherTag(text, 3, 5, mustEqual, 5, 14);
};

const checkSenderIdTypeAa = (text: string): boolean => {
  const mustEqual = ['AA'];
  return ifTagMatchThenNeedRequiredAnotherTag(text, 3, 5, mustEqual, 5, 14);
};

const checkSenderIdTypeAaSenderName = (text: string): boolean => {
  const mustEqual = ['AA'];
  return ifTagMatchThenNeedRequiredAnotherTag(text, 3, 5, mustEqual, 14, 59);
};

const checkSenderIdTypeWR = (text: string): boolean => {
  const mustEqual = ['WR'];
  return ifTagMatchThenNeedRequiredAnotherTag(text, 3, 5, mustEqual, 5, 14);
};

const checkEDIStandardVersionNumber = (text: string): boolean => {
  const mustEqual = '01.10';
  return ifTagMatchThenValid(text, 0, 3, mustEqual);
};

const checkCreationDate = (text: string): boolean => {
  return ifTagDateMustValid(text, 64, 72);
};

const checkTransmisionDate = (text: string): boolean => {
  return ifTagDateMustValid(text, 72, 78);
};
