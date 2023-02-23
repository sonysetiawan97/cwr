import path = require('path');
import { Params } from '../model/model';
import * as sqlite3 from 'sqlite3';

const dbFile = path.resolve('./tmp/database/cwr.db');

const db = new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE, (err: any) => {
  if (err) throw err;
});

export const getData = (table: string, params?: Params) => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const queries: string[] = [];
      const select = `SELECT * FROM ${table}`;
      queries.push(select);

      if (params) {
        const { where } = params;
        if (where) {
          const whereQuery: string[] = [];
          Object.entries(where).map(([key, value]) => {
            whereQuery.push(`${key} = '${value}'`);
          });

          const whereQueryJoin = whereQuery.join(' AND ');

          queries.push(`WHERE ${whereQueryJoin}`);
        }
      }

      const query = queries.join(' ');

      db.all(query, [], (err: unknown, rows: unknown) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  });
};
