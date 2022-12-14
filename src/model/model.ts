export interface Params {
  [key: string]: any;
}

export interface Options {
  tag: string;
  name: string;
}

export interface Mapping {
  id: number;
  name: string;
  label: string;
}

export interface Rule {
  id: number;
  name: string;
  rule: string;
}

export interface Table {
  name: string;
  type: string;
  length?: number;
  nullable?: boolean;
  primary?: boolean;
  autoIncrement?: boolean;
}
