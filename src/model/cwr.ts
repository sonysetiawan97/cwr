import { FileNaming, FormFileNaming } from './filename';

export interface cwr {
  fileNaming: FileNaming;
}

export const cwrForm: cwr = {
  fileNaming: FormFileNaming,
};
