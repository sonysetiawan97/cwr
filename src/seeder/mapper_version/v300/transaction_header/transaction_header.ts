import { WRK } from './types/wrk';
import { ACK } from './types/ack';
import { DWR } from './types/dwr';
import { ISR } from './types/isr';
import { EXC } from './types/exc';
import { ISA } from './types/isa';
import { LIC } from './types/lic';

export const transactionHeaderV300 = [...WRK, ...DWR, ...ISR, ...ACK, ...EXC, ...ISA, ...LIC];
