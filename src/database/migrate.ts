import { mapper } from '../seeder/mapper';
import { filename } from '../seeder/filename';

const sqlite3 = require('sqlite3').verbose();
const dbFile = __dirname + '/cwr.db';

const db = new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE, (err: any) => {
  if (err) throw err;
});

const tables = {
  mapper,
  filename,
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
      console.log(insert);
      db.run(insert);
    });
  });
});

db.close();
