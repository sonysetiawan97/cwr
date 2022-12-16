import { Params } from '../model/model';

const sqlite3 = require('sqlite3').verbose();
const dbFile = __dirname + '/cwr.db';

const db = new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE, (err: any) => {
  if (err) throw err;
});

export const getData = (table: string, params?: Params) => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const queries: Array<string> = [];
      const select = `SELECT * FROM ${table}`;
      queries.push(select);

      if (params) {
        const { where } = params;
        if (where) {
          const whereQuery: Array<string> = [];
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
