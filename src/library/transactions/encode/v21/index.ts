import { joinEnum } from '../../../../enum/join';
import { TransactionEnumV21 } from '../../../../enum/transaction';
import { versionAvailable } from '../../../../enum/version';
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
import { TransactionV21 } from '../../../../model/transaction';
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

export const encodeTransactionsVer21 = async (datas: TransactionV21[][]): Promise<string[]> => {
  const result = await Promise.all(
    datas
      .map((data) => {
        return Promise.all(
          data.map(async (items) => {
            const { group, values } = items;
            if (group === TransactionEnumV21.ACK) {
              return await ack(values as ACKV21);
            } else if (group === TransactionEnumV21.AGR) {
              return await agr(values as AGRV21);
            } else if (group === TransactionEnumV21.EXC) {
              return await exc(values as EXCV21);
            } else if (group === TransactionEnumV21.ISW) {
              return await isw(values as ISWV21);
            } else if (group === TransactionEnumV21.NWR) {
              return await nwr(values as NWRV21);
            } else if (group === TransactionEnumV21.REV) {
              return await rev(values as REVV21);
            } else if (group === TransactionEnumV21.ALT) {
              return await agr(values as AGRV21);
            } else if (group === TransactionEnumV21.ARI) {
              return await ari(values as ARIV21);
            } else if (group === TransactionEnumV21.COM) {
              return await com(values as COMV21);
            } else if (group === TransactionEnumV21.EWT) {
              return await ewt(values as EWTV21);
            } else if (group === TransactionEnumV21.IND) {
              return await ind(values as INDV21);
            } else if (group === TransactionEnumV21.INS) {
              return await ins(values as INSV21);
            } else if (group === TransactionEnumV21.IPA) {
              return await ipa(values as IPAV21);
            } else if (group === TransactionEnumV21.MSG) {
              return await msg(values as MSGV21);
            } else if (group === TransactionEnumV21.NAT) {
              return await nat(values as NATV21);
            } else if (group === TransactionEnumV21.NCT) {
              return await nct(values as NCTV21);
            } else if (group === TransactionEnumV21.NET) {
              return await net(values as NETV21);
            } else if (group === TransactionEnumV21.NOW) {
              return await now(values as NOWV21);
            } else if (group === TransactionEnumV21.NPA) {
              return await npa(values as NPAV21);
            } else if (group === TransactionEnumV21.NPR) {
              return await npr(values as NPRV21);
            } else if (group === TransactionEnumV21.NVT) {
              return await nvt(values as NVTV21);
            } else if (group === TransactionEnumV21.NWN) {
              return await nwn(values as NWNV21);
            } else if (group === TransactionEnumV21.OPU) {
              return await opu(values as OPUV21);
            } else if (group === TransactionEnumV21.ORN) {
              return await orn(values as ORNV21);
            } else if (group === TransactionEnumV21.OWR) {
              return await owr(values as OWRV21);
            } else if (group === TransactionEnumV21.PER) {
              return await per(values as PERV21);
            } else if (group === TransactionEnumV21.PWR) {
              return await pwr(values as PWRV21);
            } else if (group === TransactionEnumV21.REC) {
              return await rec(values as RECV21);
            } else if (group === TransactionEnumV21.SPT) {
              return await spt(values as SPTV21);
            } else if (group === TransactionEnumV21.SPU) {
              return await spu(values as SPUV21);
            } else if (group === TransactionEnumV21.SWR) {
              return await swr(values as SWRV21);
            } else if (group === TransactionEnumV21.SWT) {
              return await swt(values as SWTV21);
            } else if (group === TransactionEnumV21.TER) {
              return await ter(values as TERV21);
            } else if (group === TransactionEnumV21.VER) {
              return await ver(values as VERV21);
            }
          }),
        );
      })
      .filter((item) => item),
  );

  return result.map((items) => {
    return items.join(joinEnum.LineBreak);
  });
};
