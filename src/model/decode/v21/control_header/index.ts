import { CwrDecodeTransactions } from '..';
import { GRHVer21, GRTVer21 } from '../../../control_record';

export interface GRHDecodeWithTransaction {
  detail: GRHVer21;
  transaction: CwrDecodeTransactions[][];
  close_detail: GRTVer21;
}
