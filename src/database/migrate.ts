import { mapper } from '../seeder/mapper';
import { filename } from '../seeder/filename';
import { control_record } from '../seeder/control_record';
import * as sqlite3 from 'sqlite3';

const dbFile = __dirname + '/cwr.db';

const db = new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE, (err: any) => {
  if (err) throw err;
});

const tables = {
  mapper,
  filename,
  control_record,
};

db.serialize(() => {
  Object.entries(tables).map((table) => {
    const [key, items] = table;
    items.map((item) => {
      const columns = Object.keys(item)
        .map((val) => "'" + val + "'")
        .join(', ');
      const values = Object.values(item)
        .map((val) => "'" + val + "'")
        .join(', ');
      const insert = `INSERT INTO ${key} (${columns}) VALUES (${values});`;
      db.run(insert);
    });
  });
});

db.close();
