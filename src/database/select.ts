import { Params } from '../model/model';

const sqlite3 = require('sqlite3').verbose();
const dbFile = __dirname + '/cwr.db';

const db = new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE, (err: any) => {
  if (err) throw err;
});

export const fetch = (table: string, params?: Params) => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const select = `SELECT * FROM ${table}`;
      db.all(select, [], (err: unknown, rows: unknown) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  });
};
