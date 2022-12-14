import { Table } from '../model/model';

export const lookup: Array<Table> = [
  {
    name: 'id',
    type: 'INTEGER',
    length: 11,
    primary: true,
    autoIncrement: true,
  },
  {
    name: 'version',
    type: 'varchar',
    length: 12,
  },
  {
    name: 'line',
    type: 'varchar',
    length: 5,
  },
  {
    name: 'group_name',
    type: 'varchar',
    length: 25,
  },
  {
    name: 'input_type',
    type: 'varchar',
    length: 25,
  },
  {
    name: 'is_required',
    type: 'INTEGER',
    length: 1,
  },
  {
    name: 'tag',
    type: 'varchar',
    length: 25,
  },
  {
    name: 'start_char',
    type: 'INTEGER',
    length: 3,
  },
  {
    name: 'end_char',
    type: 'INTEGER',
    length: 3,
  },
  {
    name: 'size',
    type: 'INTEGER',
    length: 3,
  },
  {
    name: 'field',
    type: 'varchar',
    length: 50,
  },
  {
    name: 'options',
    type: 'text',
    nullable: true,
  },
  {
    name: 'description',
    type: 'text',
    nullable: true,
  },
];
