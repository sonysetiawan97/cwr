import { ALTV21 } from './Transactions/v21/details/alt';
import { ARIV21 } from './Transactions/v21/details/ari';
import { COMV21 } from './Transactions/v21/details/com';
import { EWTV21 } from './Transactions/v21/details/ewt';
import { INDV21 } from './Transactions/v21/details/ind';
import { INSV21 } from './Transactions/v21/details/ins';
import { IPAV21 } from './Transactions/v21/details/ipa';
import { MSGV21 } from './Transactions/v21/details/msg';
import { NATV21 } from './Transactions/v21/details/nat';
import { NCTV21 } from './Transactions/v21/details/nct';
import { NETV21 } from './Transactions/v21/details/net';
import { NOWV21 } from './Transactions/v21/details/now';
import { NPAV21 } from './Transactions/v21/details/npa';
import { NPRV21 } from './Transactions/v21/details/npr';
import { NVTV21 } from './Transactions/v21/details/nvt';
import { NWNV21 } from './Transactions/v21/details/nwn';
import { OPUV21 } from './Transactions/v21/details/opu';
import { ORNV21 } from './Transactions/v21/details/orn';
import { OWRV21 } from './Transactions/v21/details/owr';
import { PERV21 } from './Transactions/v21/details/per';
import { PWRV21 } from './Transactions/v21/details/pwr';
import { RECV21 } from './Transactions/v21/details/rec';
import { SPTV21 } from './Transactions/v21/details/spt';
import { SPUV21 } from './Transactions/v21/details/spu';
import { SWRV21 } from './Transactions/v21/details/swr';
import { SWTV21 } from './Transactions/v21/details/swt';
import { TERV21 } from './Transactions/v21/details/ter';
import { VERV21 } from './Transactions/v21/details/ver';
import { ACKV21 } from './Transactions/v21/headers/ack';
import { AGRV21 } from './Transactions/v21/headers/agr';
import { EXCV21 } from './Transactions/v21/headers/exc';
import { ISWV21 } from './Transactions/v21/headers/isw';
import { NWRV21 } from './Transactions/v21/headers/nwr';
import { REVV21 } from './Transactions/v21/headers/rev';
import { ACKV300 } from './Transactions/v300/headers/ack';
import { DWRV300 } from './Transactions/v300/headers/dwr';
import { EXCV300 } from './Transactions/v300/headers/exc';
import { ISAV300 } from './Transactions/v300/headers/isa';
import { ISRV300 } from './Transactions/v300/headers/isr';
import { LICV300 } from './Transactions/v300/headers/lic';
import { WRKV300 } from './Transactions/v300/headers/wrk';

export interface TransactionV21 {
  group: string;
  values:
    | null
    | ACKV21
    | AGRV21
    | EXCV21
    | ISWV21
    | NWRV21
    | REVV21
    | ALTV21
    | ARIV21
    | COMV21
    | EWTV21
    | INDV21
    | INSV21
    | IPAV21
    | MSGV21
    | NATV21
    | NCTV21
    | NETV21
    | NOWV21
    | NPAV21
    | NPRV21
    | NVTV21
    | NWNV21
    | OPUV21
    | ORNV21
    | OWRV21
    | PERV21
    | PWRV21
    | RECV21
    | SPTV21
    | SPUV21
    | SWRV21
    | SWTV21
    | TERV21
    | VERV21;
}

export const formTransactionV21: TransactionV21 = {
  group: '',
  values: null,
};

export interface TransactionV300 {
  group: string;
  values: null | ACKV300 | DWRV300 | EXCV300 | ISAV300 | ISRV300 | LICV300 | WRKV300;
}

export const formTransactionV300: TransactionV300 = {
  group: '',
  values: null,
};
