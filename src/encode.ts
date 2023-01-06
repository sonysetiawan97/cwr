import { versionAvailable } from './enum/version';
import { encodeControlRecord } from './library/encode/control_record';
import { encodeFileName } from './library/filename';
import { CwrEncode, CwrEncodeData, formCwrEncode } from './model/cwr';
import { EncodeFileNamingV21 } from './model/filename';

export const encodeAck = async (filenameData: EncodeFileNamingV21, data: CwrEncodeData): Promise<CwrEncode> => {
  return new Promise(async (resolve, reject) => {
    const { version } = filenameData;
    let result: CwrEncode = { ...formCwrEncode };
    if (version === versionAvailable.v21) {
      const control_record = data.control_record;
      if (control_record) {
        const filename: string | null = encodeFileName(filenameData);
        const resultControlRecord: Array<string> = await encodeControlRecord(control_record, version);
        const finalResult: Array<string> = [...resultControlRecord];
        const finalData: string = finalResult.join('\r\n');

        if (filename) {
          result = {
            ...result,
            filename,
            data: finalData,
          };

          return resolve(result);
        }
        return reject('Invalid Control Record');
      }

      return reject('Invalid Version');
    } else if (version === versionAvailable.v300) {
      return resolve(result);
    }
    return reject('Invalid Version');
  });
};
