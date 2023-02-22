import { TransactionEnumV21 } from '../../../../enum/transaction';
import { ValidationTransactionLevelEnum } from '../../../../enum/validation_message';
import { ifOnlyOnePerTransaction } from '../../functions';

export const validationAckLevel = (data: string[], headers: string[]): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (!onlyOneAckPerTransaction(data)) return reject(errorValidation());

    return resolve(true);
  });
};

const errorValidation = () => {
  return ValidationTransactionLevelEnum.ACK;
};

const onlyOneAckPerTransaction = (data: string[]): boolean => {
  return ifOnlyOnePerTransaction(data, TransactionEnumV21.ACK);
};
