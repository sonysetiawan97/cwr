import { transactionEnumV21 } from '../../../../enum/transaction';
import { ALTV21 } from '../../../../model/Transactions/v21/details/alt';
import { ARIV21 } from '../../../../model/Transactions/v21/details/ari';
import { COMV21 } from '../../../../model/Transactions/v21/details/com';
import { EWTV21 } from '../../../../model/Transactions/v21/details/ewt';
import { INDV21 } from '../../../../model/Transactions/v21/details/ind';
import { INSV21 } from '../../../../model/Transactions/v21/details/ins';
import { IPAV21 } from '../../../../model/Transactions/v21/details/ipa';
import { MSGV21 } from '../../../../model/Transactions/v21/details/msg';
import { NATV21 } from '../../../../model/Transactions/v21/details/nat';
import { NCTV21 } from '../../../../model/Transactions/v21/details/nct';
import { NETV21 } from '../../../../model/Transactions/v21/details/net';
import { NOWV21 } from '../../../../model/Transactions/v21/details/now';
import { NPAV21 } from '../../../../model/Transactions/v21/details/npa';
import { NPRV21 } from '../../../../model/Transactions/v21/details/npr';
import { NVTV21 } from '../../../../model/Transactions/v21/details/nvt';
import { NWNV21 } from '../../../../model/Transactions/v21/details/nwn';
import { OPUV21 } from '../../../../model/Transactions/v21/details/opu';
import { ORNV21 } from '../../../../model/Transactions/v21/details/orn';
import { OWRV21 } from '../../../../model/Transactions/v21/details/owr';
import { PERV21 } from '../../../../model/Transactions/v21/details/per';
import { PWRV21 } from '../../../../model/Transactions/v21/details/pwr';
import { RECV21 } from '../../../../model/Transactions/v21/details/rec';
import { SPTV21 } from '../../../../model/Transactions/v21/details/spt';
import { SPUV21 } from '../../../../model/Transactions/v21/details/spu';
import { SWRV21 } from '../../../../model/Transactions/v21/details/swr';
import { SWTV21 } from '../../../../model/Transactions/v21/details/swt';
import { TERV21 } from '../../../../model/Transactions/v21/details/ter';
import { VERV21 } from '../../../../model/Transactions/v21/details/ver';
import { ACKV21 } from '../../../../model/Transactions/v21/headers/ack';
import { AGRV21 } from '../../../../model/Transactions/v21/headers/agr';
import { EXCV21 } from '../../../../model/Transactions/v21/headers/exc';
import { ISWV21 } from '../../../../model/Transactions/v21/headers/isw';
import { NWRV21 } from '../../../../model/Transactions/v21/headers/nwr';
import { REVV21 } from '../../../../model/Transactions/v21/headers/rev';
import { TransactionV21, formTransactionV21 } from '../../../../model/transaction';
import { alt } from './details/alt';
import { ari } from './details/ari';
import { com } from './details/com';
import { ewt } from './details/ewt';
import { ind } from './details/ind';
import { ins } from './details/ins';
import { ipa } from './details/ipa';
import { msg } from './details/msg';
import { nat } from './details/nat';
import { nct } from './details/nct';
import { net } from './details/net';
import { now } from './details/now';
import { npa } from './details/npa';
import { npr } from './details/npr';
import { nvt } from './details/nvt';
import { nwn } from './details/nwn';
import { opu } from './details/opu';
import { orn } from './details/orn';
import { owr } from './details/owr';
import { per } from './details/per';
import { pwr } from './details/pwr';
import { rec } from './details/rec';
import { spt } from './details/spt';
import { spu } from './details/spu';
import { swr } from './details/swr';
import { swt } from './details/swt';
import { ter } from './details/ter';
import { ver } from './details/ver';
import { ack } from './headers/ack';
import { agr } from './headers/agr';
import { exc } from './headers/exc';
import { isw } from './headers/isw';
import { nwr } from './headers/nwr';
import { rev } from './headers/rev';

export const decodeTransactionsV21 = async (data: string[][]): Promise<TransactionV21[][]> => {
  const result: TransactionV21[][] = [];

  await Promise.all(
    data.map(async (item) => {
      const entry: TransactionV21[] = await decodeTransactionV21(item);
      result.unshift(entry);
    }),
  );

  return result;
};

export const decodeTransactionV21 = async (data: string[]): Promise<TransactionV21[]> => {
  const result: TransactionV21[] = [];

  await Promise.all(
    data.map(async (item) => {
      let entry: TransactionV21 = { ...formTransactionV21 };
      let values:
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
        | RECV21
        | PWRV21
        | SPTV21
        | SPUV21
        | SWRV21
        | SWTV21
        | TERV21
        | VERV21 = null;

      const group: string = item.slice(0, 3);
      if (group === transactionEnumV21.ACK) {
        values = await ack(item, group);
      } else if (group === transactionEnumV21.AGR) {
        values = await agr(item, group);
      } else if (group === transactionEnumV21.EXC) {
        values = await exc(item, group);
      } else if (group === transactionEnumV21.ISW) {
        values = await isw(item, group);
      } else if (group === transactionEnumV21.NWR) {
        values = await nwr(item, group);
      } else if (group === transactionEnumV21.REV) {
        values = await rev(item, group);
      } else if (group === transactionEnumV21.ALT) {
        values = await alt(item, group);
      } else if (group === transactionEnumV21.ARI) {
        values = await ari(item, group);
      } else if (group === transactionEnumV21.COM) {
        values = await com(item, group);
      } else if (group === transactionEnumV21.EWT) {
        values = await ewt(item, group);
      } else if (group === transactionEnumV21.IND) {
        values = await ind(item, group);
      } else if (group === transactionEnumV21.INS) {
        values = await ins(item, group);
      } else if (group === transactionEnumV21.IPA) {
        values = await ipa(item, group);
      } else if (group === transactionEnumV21.MSG) {
        values = await msg(item, group);
      } else if (group === transactionEnumV21.NAT) {
        values = await nat(item, group);
      } else if (group === transactionEnumV21.NCT) {
        values = await nct(item, group);
      } else if (group === transactionEnumV21.NET) {
        values = await net(item, group);
      } else if (group === transactionEnumV21.NOW) {
        values = await now(item, group);
      } else if (group === transactionEnumV21.NPA) {
        values = await npa(item, group);
      } else if (group === transactionEnumV21.NPR) {
        values = await npr(item, group);
      } else if (group === transactionEnumV21.NVT) {
        values = await nvt(item, group);
      } else if (group === transactionEnumV21.NWN) {
        values = await nwn(item, group);
      } else if (group === transactionEnumV21.OPU) {
        values = await opu(item, group);
      } else if (group === transactionEnumV21.ORN) {
        values = await orn(item, group);
      } else if (group === transactionEnumV21.OWR) {
        values = await owr(item, group);
      } else if (group === transactionEnumV21.PER) {
        values = await per(item, group);
      } else if (group === transactionEnumV21.PWR) {
        values = await pwr(item, group);
      } else if (group === transactionEnumV21.REC) {
        values = await rec(item, group);
      } else if (group === transactionEnumV21.SPT) {
        values = await spt(item, group);
      } else if (group === transactionEnumV21.SPU) {
        values = await spu(item, group);
      } else if (group === transactionEnumV21.SWR) {
        values = await swr(item, group);
      } else if (group === transactionEnumV21.SWT) {
        values = await swt(item, group);
      } else if (group === transactionEnumV21.TER) {
        values = await ter(item, group);
      } else if (group === transactionEnumV21.VER) {
        values = await ver(item, group);
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
