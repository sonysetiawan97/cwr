export enum validationMessageEnum {
  FILELEVEL = 'Invalid validation on file level.',
  HDRLEVEL = 'Invalid validation on HDR level.',
  GRHLEVEL = 'Invalid validation on GRH level.',
  GRTLEVEL = 'Invalid validation on GRT level.',
  TRLLEVEL = 'Invalid validation on TRL level.',
}

export enum ValidationFileLevelStepMessageEnum {
  FIRSTLINEMUSTHDR = 'First Line Must HDR',
  SECONDLINEMUSTGRH = 'Second Line Must GRH',
  EVERYGRHNOTPRECEDEDBYGRT = 'Every GRH Not Preceded By GRT',
  LASTLINEMUSTTRL = 'Last Line Must TRL',
  GRHFOLLOWEDBYTRANSACTIONHEADER = 'GRH Followed By Transaction Header',
}
