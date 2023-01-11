import { MapperSeeder } from '../../../../model/mapper';
import { ALT } from './types/alt';
import { ARI } from './types/ari';
import { COM } from './types/com';
import { EWT } from './types/ewt';
import { IND } from './types/ind';
import { INS } from './types/ins';
import { IPA } from './types/ipa';
import { MSG } from './types/msg';
import { NAT } from './types/nat';
import { NCT } from './types/nct';
import { NET } from './types/net';
import { NOW } from './types/now';
import { NPA } from './types/npa';
import { NPR } from './types/npr';
import { NVT } from './types/nvt';
import { NWN } from './types/nwn';
import { OPU } from './types/opu';
import { ORN } from './types/orn';
import { OWR } from './types/owr';
import { PER } from './types/per';
import { PWR } from './types/pwr';
import { REC } from './types/rec';
import { SPT } from './types/spt';
import { SPU } from './types/spu';
import { SWR } from './types/swr';
import { SWT } from './types/swt';
import { TER } from './types/ter';
import { VER } from './types/ver';

export const detailRecordV21: MapperSeeder[] = [
  ...TER,
  ...IPA,
  ...NPA,
  ...SPU,
  ...SPT,
  ...OPU,
  ...SWR,
  ...OWR,
  ...NWN,
  ...NPA,
  ...SWT,
  ...PWR,
  ...ALT,
  ...NAT,
  ...EWT,
  ...VER,
  ...PER,
  ...NPR,
  ...REC,
  ...ORN,
  ...INS,
  ...IND,
  ...COM,
  ...MSG,
  ...NET,
  ...NCT,
  ...NVT,
  ...NOW,
  ...ARI,
];
