import { controlRecordEnum } from '../../../../enum/control_record';
import { validationMessageEnum } from '../../../../enum/validation_message';
import { ifTagDateMustValid, ifTagMatchThenNeedRequiredAnotherTag, ifTagMatchThenCheckValid } from '../../functions';

export const validationHDRLevel = async (text: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (!tagMustBeHDR(text)) return reject(validationMessageEnum.HDRLEVEL);
    if (!checkSenderType(text)) return reject(validationMessageEnum.HDRLEVEL);
    if (!checkSenderIdTypePbWrAa(text)) return reject(validationMessageEnum.HDRLEVEL);
    if (!checkSenderIdTypePB(text)) return reject(validationMessageEnum.HDRLEVEL);
    if (!checkSenderIdTypeSo(text)) return reject(validationMessageEnum.HDRLEVEL);
    if (!checkSenderIdTypeAa(text)) return reject(validationMessageEnum.HDRLEVEL);
    if (!checkSenderIdTypeAaSenderName(text)) return reject(validationMessageEnum.HDRLEVEL);
    if (!checkEDIStandardVersionNumber(text)) return reject(validationMessageEnum.HDRLEVEL);
    if (!checkCreationDate(text)) return reject(validationMessageEnum.HDRLEVEL);
    if (!checkTransmisionDate(text)) return reject(validationMessageEnum.HDRLEVEL);
    if (!checkSenderIdTypePBSenderName(text)) return reject(validationMessageEnum.HDRLEVEL);
    if (!checkSenderIdTypeWR(text)) return reject(validationMessageEnum.HDRLEVEL);

    return resolve(true);
  });
};

const tagMustBeHDR = (text: string): boolean => {
  const mustEqual = controlRecordEnum.HDR;
  return ifTagMatchThenCheckValid(text, 0, 3, mustEqual);
};

const checkSenderType = (text: string): boolean => {
  const mustEqual = ['PB', 'SO', 'WR', 'AA'];
  return ifTagMatchThenCheckValid(text, 0, 3, mustEqual);
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
  return ifTagMatchThenCheckValid(text, 0, 3, mustEqual);
};

const checkCreationDate = (text: string): boolean => {
  return ifTagDateMustValid(text, 64, 72);
};

const checkTransmisionDate = (text: string): boolean => {
  return ifTagDateMustValid(text, 72, 78);
};
