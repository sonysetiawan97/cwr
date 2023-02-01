import { ControlRecord, GRHVer21, GRTVer21, HDRVer21, TRLVer21 } from '../../../../model/control_record';
import { CwrEncodeControlHeader } from '../../../../model/encode/v21/control_header';
import { encodeGRHVer21 } from './details/grh';
import { encodeGRTVer21 } from './details/grt';
import { encodeHDRVer21 } from './details/hdr';
import { encodeTRLVer21 } from './details/trl';

export const encodeControlRecordVer21 = async (data: CwrEncodeControlHeader): Promise<string[]> => {
  const { hdr, grh, grt, trl } = data;

  const hdrResult: string = await encodeHDRVer21(hdr);
  const grhResult: string = await encodeGRHVer21(grh);
  const grtResult: string = await encodeGRTVer21(grt);
  const trlResult: string = await encodeTRLVer21(trl);

  return [hdrResult, grhResult, grtResult, trlResult];
};
