import { controlRecordEnum } from "../../../../enum/control_record";
import { validationMessageEnum } from "../../../../enum/validation_message";
import { findTag } from "../../../formatter/tag";

export const validationHDRLevel = async (text: string) : Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (tagMustBeHDR(text)) return resolve(true);
    if (checkSenderType(text)) return resolve(true);
    if (checkSenderIdTypePbWrAa(text)) return resolve(true);
    if (checkSenderIdTypeSo(text)) return resolve(true);
    if (checkEDIStandardVersionNumber(text)) return resolve(true);

    return reject(validationMessageEnum.GRHLEVEL);
  });
}

const tagMustBeHDR = (text: string) : boolean => {
  const tag = findTag(text, 0, 3);
  if (tag === controlRecordEnum.HDR) {
    return true;
  }

  return false;
}

const checkSenderType = (text: string) : boolean => {
  const mustEqual = ['PB', 'SO', 'WR', 'AA'];
  const tag = findTag(text, 3, 5);

  if (mustEqual.includes(tag)) {
    return true;
  }

  return false;
}

const checkSenderIdTypePbWrAa = (text: string) : boolean => {
  const mustEqual = ['PB', 'WR', 'AA'];
  const tag = findTag(text, 3, 5);

  if (mustEqual.includes(tag)) {
    const senderId = findTag(text, 5, 14);
    if (senderId === null || senderId === '') {
      return false;
    }

    return true;
  }

  return true
}

const checkSenderIdTypeSo = (text: string) : boolean => {
  const mustEqual = ['SO'];
  const tag = findTag(text, 3, 5);

  if (mustEqual.includes(tag)) {
    const senderId = findTag(text, 5, 14);
    if (senderId === null || senderId === '') {
      return false;
    }

    return true;
  }

  return true
}

const checkEDIStandardVersionNumber = (text: string) : boolean => {
  const tag = findTag(text, 59, 64);

  if (tag === '01.10') {
    return true;
  }

  return true
}