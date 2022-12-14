import * as path from 'path';
import { Decode } from '../index';
import { cwr } from '../model/cwr';

test('Decode CWR', async () => {
  const fileName: string = 'CW200046026_MME.V21';
  const bucket: string = '/__files__/';
  const fullpath: string = path.join(__dirname, '..', bucket, fileName);
  const expectData: cwr = {
    fileNaming: {
      identity: 'CW',
      year: '20',
      sequence: '0046',
      society: '026',
      receiver: 'MME',
      version: 'V21',
    },
  };

  await expect(Decode(fullpath)).resolves.toStrictEqual(expectData);
});
