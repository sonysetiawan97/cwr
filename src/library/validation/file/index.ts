import { controlRecordEnum } from '../../../enum/control_record';
import { TransactionHeaderEnumV21 } from '../../../enum/transaction';
// import { ValidationFileLevelStepMessageEnum } from '../../../enum/validation_message';

export const validationFileLevel = (data: string[]): Promise<boolean> => {
  const [hdr, grh, transactionHeader] = data;
  const trl = data[data.length - 1];

  return new Promise((resolve) => {
    if (!firstLineMustHDR(hdr)) return resolve(false);
    // console.info(ValidationFileLevelStepMessageEnum.FIRSTLINEMUSTHDR);
    if (!secondLineMustGRH(grh)) return resolve(false);
    // console.info(ValidationFileLevelStepMessageEnum.SECONDLINEMUSTGRH);
    if (!everyGRHNotPrecededByGRT(hdr)) return resolve(false);
    // console.info(ValidationFileLevelStepMessageEnum.EVERYGRHNOTPRECEDEDBYGRT);
    if (!lastLineMustTRL(trl)) return resolve(false);
    // console.info(ValidationFileLevelStepMessageEnum.LASTLINEMUSTTRL);
    if (!grhFollowedByTransactionHeader(transactionHeader)) return resolve(false);
    // console.info(ValidationFileLevelStepMessageEnum.GRHFOLLOWEDBYTRANSACTIONHEADER);

    return resolve(true);
  });
};

const firstLineMustHDR = (text: string): boolean => {
  const tag = getTag(text);

  if (tag === controlRecordEnum.HDR) {
    return true;
  }

  return false;
};

const secondLineMustGRH = (text: string): boolean => {
  const tag = getTag(text);

  if (tag === controlRecordEnum.GRH) {
    return true;
  }

  return false;
};

const everyGRHNotPrecededByGRT = (text: string): boolean => {
  const tag = getTag(text);

  if (tag === controlRecordEnum.GRT) {
    return false;
  }

  return true;
};

const lastLineMustTRL = (text: string): boolean => {
  const tag = getTag(text);

  if (tag === controlRecordEnum.TRL) {
    return true;
  }

  return false;
};

const grhFollowedByTransactionHeader = (text: string): boolean => {
  const tag = getTag(text);
  const followed: string[] = [
    TransactionHeaderEnumV21.ACK,
    TransactionHeaderEnumV21.AGR,
    TransactionHeaderEnumV21.EXC,
    TransactionHeaderEnumV21.ISW,
    TransactionHeaderEnumV21.NWR,
    TransactionHeaderEnumV21.REV,
  ];

  if (followed.includes(tag)) {
    return true;
  }

  return false;
};

const getTag = (text: string, size: number = 3): string => {
  return text.slice(0, size);
};
