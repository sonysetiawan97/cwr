import { mapper } from '../table/mapper';
import { filename } from '../table/filename';
import { tag_header } from '../table/tag_header';
import * as sqlite3 from 'sqlite3';
import path = require('path');

const dbFile = path.resolve('./tmp/database/cwr.db');

console.log(dbFile);

const db = new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE, (err: any) => {
  if (err) throw err;
});

const tables = {
  filename,
  mapper,
  tag_header,
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
    db.run(create);
  });
});

db.close();
