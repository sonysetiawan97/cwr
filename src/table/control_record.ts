import { Table } from '../model/model';

export const control_record: Table[] = [
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
    name: 'tag',
    type: 'VARCHAR',
    length: 50,
  },
];
