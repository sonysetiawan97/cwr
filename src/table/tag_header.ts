import { Table } from '../model/model';

export const tag_header: Table[] = [
  {
    name: 'id',
    type: 'INTEGER',
    length: 11,
    primary: true,
    autoIncrement: true,
  },
  {
    name: 'version',
    type: 'VARCHAR',
    length: 12,
  },
  {
    name: 'type',
    type: 'VARCHAR',
    length: 50,
  },
  {
    name: 'tag',
    type: 'VARCHAR',
    length: 50,
  },
];
