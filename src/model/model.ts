export interface Where {
  [key: string]: any;
}
export interface Params {
  where?: Where;
}

export interface Options {
  tag: string;
  name: string;
}

export interface Table {
  name: string;
  type: string;
  length?: number;
  nullable?: boolean;
  primary?: boolean;
  autoIncrement?: boolean;
}
