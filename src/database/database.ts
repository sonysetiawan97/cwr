import { lookup } from '../table/lookup';
import { filename } from '../table/filename';

const sqlite3 = require('sqlite3').verbose();
const dbFile = __dirname + '/cwr.db';

const db = new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE, (err: any) => {
  if (err) throw err;
});

const tables = {
  filename,
  lookup,
};

db.serialize(() => {
  Object.entries(tables).map((table) => {
    const [key, items] = table;
    const tableFormat = items
      .map((item) => {
        const { name, type, length, nullable, primary, autoIncrement } = item;
        const result = [name, type];
        if (length && !autoIncrement) {
          result.push(`(${length})`);
        }
        if (nullable) {
          result.push('NULL');
        } else {
          result.push('NOT NULL');
        }
        if (primary) {
          result.push('PRIMARY KEY');
        }
        if (autoIncrement) {
          result.push('AUTOINCREMENT');
        }
        return result.join(' ');
      })
      .join(', ');
    const create = `CREATE TABLE ${key} (${tableFormat})`;
    console.log(create);
    db.run(create);
  });
});

db.close();
