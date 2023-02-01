import { TransactionHeaderEnumV21, TransactionEnumV21 } from '../../../../enum/transaction';
import { DetailTransaction, Transactions } from '../../../../model/transaction';
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

const breakText = [
  TransactionHeaderEnumV21.AGR,
  TransactionHeaderEnumV21.NWR,
  TransactionHeaderEnumV21.REV,
  TransactionHeaderEnumV21.EXC,
];

export const decodeTransactionsV21 = async (data: string[][]): Promise<Transactions[][]> => {
  const result: Transactions[][] = [];

  await Promise.all(
    data.map(async (item) => {
      const entry: Transactions[] = await decodeTransaction(item);
      result.unshift(entry);
    }),
  );

  return result;
};

export const decodeTransaction = async (data: string[]): Promise<Transactions[]> => {
  const [first, ...leftData] = data;

  if (first) {
    const tag = first.slice(0, 3);

    if (tag == TransactionHeaderEnumV21.ACK) {
      const children: Transactions[] = await generateACK(leftData);
      const detail: DetailTransaction = await ack(first, tag);

      const result: Transactions = {
        parent: {
          tag,
          detail,
        },
        children: [...children],
      };

      return [result];
    }
  }

  return [];
};

const generateACK = async (data: string[]): Promise<Transactions[]> => {
  const transaction: Transactions[] = [];

  let findIndexData = getTagArrayAckFromText(data);
  do {
    let entry: Transactions = {};
    let children: Transactions[] = [];
    let detail: DetailTransaction = {};
    const [child] = data.splice(findIndexData, 1);

    const tag = child.slice(0, 3);

    if (tag === TransactionEnumV21.AGR) {
      detail = await agr(child, tag);
    } else if (tag === TransactionEnumV21.NWR) {
      detail = await nwr(child, tag);
    } else if (tag === TransactionEnumV21.EXC) {
      detail = await exc(child, tag);
    } else if (tag === TransactionEnumV21.ISW) {
      detail = await isw(child, tag);
    } else if (tag === TransactionEnumV21.REV) {
      detail = await rev(child, tag);
    } else if (tag === TransactionEnumV21.MSG) {
      detail = await msg(child, tag);
    }

    const lastIndexData = getTagArrayAckFromText(data);
    let childrens: string[] = data;

    if (lastIndexData >= 0) {
      childrens = data.splice(0, lastIndexData);
    }

    entry = {
      ...entry,
      parent: {
        tag,
        detail,
      },
    };

    if (childrens.length > 0) {
      children = await generateChildren(childrens);
      entry = {
        ...entry,
        children,
      };
    }

    transaction.push(entry);
    findIndexData = getTagArrayAckFromText(data);
  } while (findIndexData >= 0);

  return transaction;
};

const generateChildren = async (data: string[]): Promise<Transactions[]> => {
  return Promise.all(
    data.map(async (item) => {
      const tag = item.slice(0, 3) as TransactionEnumV21;
      const detail = await decodeDetails(item, tag);
      const result: Transactions = {
        parent: {
          tag,
          detail,
        },
      };
      return result;
    }),
  );
};

const getIndexTagFromText = (data: string[], tag: TransactionEnumV21): number => {
  const findIndexData = data.findIndex((d) => d.slice(0, 3) === tag);
  return findIndexData;
};

const getTagArrayAckFromText = (data: string[]): number => {
  const breakText = [
    TransactionEnumV21.MSG,
    TransactionEnumV21.AGR,
    TransactionEnumV21.NWR,
    TransactionEnumV21.REV,
    TransactionEnumV21.EXC,
    TransactionEnumV21.ISW,
  ];
  const findIndexData = data.findIndex((d) => breakText.includes(d.slice(0, 3) as TransactionEnumV21));
  return findIndexData;
};

export const decodeDetails = async (text: string, tag: TransactionEnumV21): Promise<DetailTransaction> => {
  if (tag === TransactionEnumV21.ALT) {
    return await alt(text, tag);
  } else if (tag === TransactionEnumV21.ARI) {
    return await ari(text, tag);
  } else if (tag === TransactionEnumV21.COM) {
    return await com(text, tag);
  } else if (tag === TransactionEnumV21.EWT) {
    return await ewt(text, tag);
  } else if (tag === TransactionEnumV21.IND) {
    return await ind(text, tag);
  } else if (tag === TransactionEnumV21.INS) {
    return await ins(text, tag);
  } else if (tag === TransactionEnumV21.IPA) {
    return await ipa(text, tag);
  } else if (tag === TransactionEnumV21.MSG) {
    return await msg(text, tag);
  } else if (tag === TransactionEnumV21.NAT) {
    return await nat(text, tag);
  } else if (tag === TransactionEnumV21.NCT) {
    return await nct(text, tag);
  } else if (tag === TransactionEnumV21.NET) {
    return await net(text, tag);
  } else if (tag === TransactionEnumV21.NOW) {
    return await now(text, tag);
  } else if (tag === TransactionEnumV21.NPA) {
    return await npa(text, tag);
  } else if (tag === TransactionEnumV21.NPR) {
    return await npr(text, tag);
  } else if (tag === TransactionEnumV21.NVT) {
    return await nvt(text, tag);
  } else if (tag === TransactionEnumV21.NWN) {
    return await nwn(text, tag);
  } else if (tag === TransactionEnumV21.OPU) {
    return await opu(text, tag);
  } else if (tag === TransactionEnumV21.ORN) {
    return await orn(text, tag);
  } else if (tag === TransactionEnumV21.OWR) {
    return await owr(text, tag);
  } else if (tag === TransactionEnumV21.PER) {
    return await per(text, tag);
  } else if (tag === TransactionEnumV21.PWR) {
    return await pwr(text, tag);
  } else if (tag === TransactionEnumV21.REC) {
    return await rec(text, tag);
  } else if (tag === TransactionEnumV21.SPT) {
    return await spt(text, tag);
  } else if (tag === TransactionEnumV21.SPU) {
    return await spu(text, tag);
  } else if (tag === TransactionEnumV21.SWR) {
    return await swr(text, tag);
  } else if (tag === TransactionEnumV21.SWT) {
    return await swt(text, tag);
  } else if (tag === TransactionEnumV21.TER) {
    return await ter(text, tag);
  } else if (tag === TransactionEnumV21.VER) {
    return await ver(text, tag);
  }

  return {};
};
