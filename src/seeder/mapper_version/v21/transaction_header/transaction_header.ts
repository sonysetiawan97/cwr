import { ACK } from './types/ack';
import { AGR } from './types/agr';
import { EXC } from './types/exc';
import { ISW } from './types/isw';
import { NWR } from './types/nwr';
import { REV } from './types/rev';

export const transactionHeaderV21 = [...AGR, ...NWR, ...REV, ...ISW, ...EXC, ...ACK];
