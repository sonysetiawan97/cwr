import { transactionEnumV300 } from '../../../../enum/transaction';
import { ALTV300 } from '../../../../model/Transactions/v300/details/alt';
import { DOTV300 } from '../../../../model/Transactions/v300/details/dot';
import { FTVV300 } from '../../../../model/Transactions/v300/details/ftv';
import { INDV300 } from '../../../../model/Transactions/v300/details/ind';
import { INSV300 } from '../../../../model/Transactions/v300/details/ins';
import { MSGV300 } from '../../../../model/Transactions/v300/details/msg';
import { NATV300 } from '../../../../model/Transactions/v300/details/nat';
import { NOTV300 } from '../../../../model/Transactions/v300/details/not';
import { NOWV300 } from '../../../../model/Transactions/v300/details/now';
import { NPNV300 } from '../../../../model/Transactions/v300/details/npn';
import { NPRV300 } from '../../../../model/Transactions/v300/details/npr';
import { NRCV300 } from '../../../../model/Transactions/v300/details/nrc';
import { NWNV300 } from '../../../../model/Transactions/v300/details/nwn';
import { OPTV300 } from '../../../../model/Transactions/v300/details/opt';
import { OPUV300 } from '../../../../model/Transactions/v300/details/opu';
import { ORNV300 } from '../../../../model/Transactions/v300/details/orn';
import { OWKV300 } from '../../../../model/Transactions/v300/details/owk';
import { OWRV300 } from '../../../../model/Transactions/v300/details/owr';
import { OWTV300 } from '../../../../model/Transactions/v300/details/owt';
import { PERV300 } from '../../../../model/Transactions/v300/details/per';
import { PWRV300 } from '../../../../model/Transactions/v300/details/pwr';
import { RECV300 } from '../../../../model/Transactions/v300/details/rec';
import { SPTV300 } from '../../../../model/Transactions/v300/details/spt';
import { SPUV300 } from '../../../../model/Transactions/v300/details/spu';
import { SWRV300 } from '../../../../model/Transactions/v300/details/swr';
import { SWTV300 } from '../../../../model/Transactions/v300/details/swt';
import { WRIV300 } from '../../../../model/Transactions/v300/details/wri';
import { XRFV300 } from '../../../../model/Transactions/v300/details/xrf';
import { ACKV300 } from '../../../../model/Transactions/v300/headers/ack';
import { DWRV300 } from '../../../../model/Transactions/v300/headers/dwr';
import { EXCV300 } from '../../../../model/Transactions/v300/headers/exc';
import { ISAV300 } from '../../../../model/Transactions/v300/headers/isa';
import { ISRV300 } from '../../../../model/Transactions/v300/headers/isr';
import { LICV300 } from '../../../../model/Transactions/v300/headers/lic';
import { WRKV300 } from '../../../../model/Transactions/v300/headers/wrk';
import { TransactionV300, formTransactionV300 } from '../../../../model/transaction';
import { alt } from './details/alt';
import { dot } from './details/dot';
import { ftv } from './details/ftv';
import { ind } from './details/ind';
import { ins } from './details/ins';
import { msg } from './details/msg';
import { nat } from './details/nat';
import { not } from './details/not';
import { now } from './details/now';
import { npn } from './details/npn';
import { npr } from './details/npr';
import { nrc } from './details/nrc';
import { nwn } from './details/nwn';
import { opt } from './details/opt';
import { opu } from './details/opu';
import { orn } from './details/orn';
import { owk } from './details/owk';
import { per } from './details/per';
import { pwr } from './details/pwr';
import { rec } from './details/rec';
import { spt } from './details/spt';
import { spu } from './details/spu';
import { swr } from './details/swr';
import { swt } from './details/swt';
import { wri } from './details/wri';
import { xrf } from './details/xrf';
import { ack } from './headers/ack';
import { dwr } from './headers/dwr';
import { exc } from './headers/exc';
import { isa } from './headers/isa';
import { isr } from './headers/isr';
import { lic } from './headers/lic';

export const decodeTransactionsV300 = async (data: Array<Array<string>>): Promise<Array<Array<TransactionV300>>> => {
  let result: Array<Array<TransactionV300>> = [];

  await Promise.all(
    data.map(async (item) => {
      const entry: Array<TransactionV300> = await decodeTransactionV300(item);
      result.unshift(entry);
    }),
  );

  return result;
};

export const decodeTransactionV300 = async (data: Array<string>): Promise<Array<TransactionV300>> => {
  let result: Array<TransactionV300> = [];

  await Promise.all(
    data.map(async (item) => {
      let entry: TransactionV300 = { ...formTransactionV300 };
      let values:
        | null
        | ACKV300
        | DWRV300
        | EXCV300
        | ISAV300
        | ISRV300
        | LICV300
        | WRKV300
        | ALTV300
        | DOTV300
        | FTVV300
        | INDV300
        | INSV300
        | MSGV300
        | NATV300
        | NOTV300
        | NOWV300
        | NPNV300
        | NPRV300
        | NRCV300
        | NWNV300
        | OPTV300
        | OPUV300
        | ORNV300
        | OWKV300
        | OWRV300
        | OWTV300
        | PERV300
        | PWRV300
        | RECV300
        | SPTV300
        | SPUV300
        | SWRV300
        | SWTV300
        | WRIV300
        | XRFV300 = null;

      const group: string = item.slice(0, 3);
      if (group === transactionEnumV300.ACK) {
        values = await ack(item, group);
      } else if (group === transactionEnumV300.ALT) {
        values = await alt(item, group);
      } else if (group === transactionEnumV300.DOT) {
        values = await dot(item, group);
      } else if (group === transactionEnumV300.DWR) {
        values = await dwr(item, group);
      } else if (group === transactionEnumV300.EXC) {
        values = await exc(item, group);
      } else if (group === transactionEnumV300.FTV) {
        values = await ftv(item, group);
      } else if (group === transactionEnumV300.IND) {
        values = await ind(item, group);
      } else if (group === transactionEnumV300.INS) {
        values = await ins(item, group);
      } else if (group === transactionEnumV300.ISA) {
        values = await isa(item, group);
      } else if (group === transactionEnumV300.ISR) {
        values = await isr(item, group);
      } else if (group === transactionEnumV300.LIC) {
        values = await lic(item, group);
      } else if (group === transactionEnumV300.MSG) {
        values = await msg(item, group);
      } else if (group === transactionEnumV300.NAT) {
        values = await nat(item, group);
      } else if (group === transactionEnumV300.NOT) {
        values = await not(item, group);
      } else if (group === transactionEnumV300.NOW) {
        values = await now(item, group);
      } else if (group === transactionEnumV300.NPN) {
        values = await npn(item, group);
      } else if (group === transactionEnumV300.NPR) {
        values = await npr(item, group);
      } else if (group === transactionEnumV300.NRC) {
        values = await nrc(item, group);
      } else if (group === transactionEnumV300.NWN) {
        values = await nwn(item, group);
      } else if (group === transactionEnumV300.OPT) {
        values = await opt(item, group);
      } else if (group === transactionEnumV300.OPU) {
        values = await opu(item, group);
      } else if (group === transactionEnumV300.ORN) {
        values = await orn(item, group);
      } else if (group === transactionEnumV300.OWK) {
        values = await owk(item, group);
      } else if (group === transactionEnumV300.PER) {
        values = await per(item, group);
      } else if (group === transactionEnumV300.PWR) {
        values = await pwr(item, group);
      } else if (group === transactionEnumV300.REC) {
        values = await rec(item, group);
      } else if (group === transactionEnumV300.SPT) {
        values = await spt(item, group);
      } else if (group === transactionEnumV300.SPU) {
        values = await spu(item, group);
      } else if (group === transactionEnumV300.SWR) {
        values = await swr(item, group);
      } else if (group === transactionEnumV300.SWT) {
        values = await swt(item, group);
      } else if (group === transactionEnumV300.WRI) {
        values = await wri(item, group);
      } else if (group === transactionEnumV300.XRF) {
        values = await xrf(item, group);
      }

      entry = {
        ...entry,
        group,
        values,
      };
      result.push(entry);
    }),
  );

  return result;
};
