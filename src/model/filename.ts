export interface Filename {
  id: number;
  version: string;
  input_type: string;
  tag: string;
  start_char: number;
  end_char: number;
  size: number;
  field: string;
}

export interface FilenameSeeder {
  version: string;
  input_type: string;
  tag: string;
  start_char: number;
  end_char: number;
  size: number;
  field: string;
}

export interface FileNaming {
  identity: string;
  year: string;
  sequence: string;
  society: string;
  receiver: string;
  version: string;
}

export const FormFileNaming: FileNaming = {
  identity: '',
  year: '',
  sequence: '',
  society: '',
  receiver: '',
  version: '',
};
