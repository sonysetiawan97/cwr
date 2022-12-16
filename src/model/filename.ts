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

export interface FileNamingV21 {
  identity: string;
  year: string;
  sequence: string;
  society: string;
  receiver: string;
  version: string;
}

export const FormFileNamingV21: FileNamingV21 = {
  identity: '',
  year: '',
  sequence: '',
  society: '',
  receiver: '',
  version: '',
};

export interface FileNamingV30 {
  identity: string;
  year: string;
  file_number: string;
  submitter: string;
  recepient: string;
  version: string;
  revision: string;
  ext: string;
}

export const FormFileNamingV30: FileNamingV30 = {
  identity: '',
  year: '',
  file_number: '',
  submitter: '',
  recepient: '',
  version: '',
  revision: '',
  ext: '',
};
