import { ControlRecord, GRHVer21, GRTVer21, HDRVer21, TRLVer21 } from '../../../../model/control_record';
import { encodeGRHVer21 } from './details/grh';
import { encodeGRTVer21 } from './details/grt';
import { encodeHDRVer21 } from './details/hdr';
import { encodeTRLVer21 } from './details/trl';

export const encodeControlRecordVer21 = async (datas: ControlRecord): Promise<Array<string>> => {
  const hdrData = datas.hdr as HDRVer21;
  const grhData = datas.grh as GRHVer21;
  const grtData = datas.grt as GRTVer21;
  const trlData = datas.trl as TRLVer21;

  const hdr: string = await encodeHDRVer21(hdrData);
  const grh: string = await encodeGRHVer21(grhData);
  const grt: string = await encodeGRTVer21(grtData);
  const trl: string = await encodeTRLVer21(trlData);

  return [hdr, grh, grt, trl];
};
