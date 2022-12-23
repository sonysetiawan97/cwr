import { ACKV21 } from './Transactions/v21/ack';

export interface TransactionV21 {
  group: string;
  values: ACKV21 | null;
}

export const formTransactionV21: TransactionV21 = {
  group: '',
  values: null,
};
