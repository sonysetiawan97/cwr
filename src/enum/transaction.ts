export enum TransactionHeaderEnumV21 {
  AGR = 'AGR',
  NWR = 'NWR',
  REV = 'REV',
  ISW = 'ISW',
  EXC = 'EXC',
  ACK = 'ACK',
}

export enum TransactionEnumV21 {
  AGR = 'AGR', // Agreement supporting Work Registration
  NWR = 'NWR', // New Works Registration
  REV = 'REV', // Revised Registration
  ISW = 'ISW', // Notification of ISWC assigned to a work
  EXC = 'EXC', // Existing work which is in conflict with a work registration
  ACK = 'ACK', // Acknowledgment of Transaction
  TER = 'TER', // Territory in Agreement
  IPA = 'IPA', // Interested Party of Agreement
  SPU = 'SPU', // Publisher Controlled by Submitter
  NPN = 'NPN', // Non-Roman Alphabet Publisher Name
  SPT = 'SPT', // Publisher Territory of Control
  OPU = 'OPU', // Other Publisher
  SWR = 'SWR', // Writer Controlled by Submitter
  NWN = 'NWN', // Non-Roman Alphabet Writer Name
  SWT = 'SWT', // Writer Territory of Control
  PWR = 'PWR', // Publisher for Writer
  OWR = 'OWR', // Other Writer
  ALT = 'ALT', // Alternate Title
  NAT = 'NAT', // Non-Roman Alphabet Title
  EWT = 'EWT', // Entire Work Title for Excerpts
  NET = 'NET', // Non-Roman Alphabet Entire Work Title for Excerpts
  VER = 'VER', // Original Work Title for Versions
  NVT = 'NVT', // Non-Roman Alphabet Original Title for Versions
  PER = 'PER', // Performing Artist
  NPR = 'NPR', // Performing Artist Name in Non-Roman Alphabet
  REC = 'REC', // Recording Detail
  ORN = 'ORN', // Work Origin
  INS = 'INS', // Instrumentation Summary
  IND = 'IND', // Instrumentation Detail
  COM = 'COM', // Composite Component
  NCT = 'NCT', // Non-Roman Alphabet Title for Components
  NOW = 'NOW', // Non-Roman Alphabet Other Writer Name
  MSG = 'MSG', // Message
  ARI = 'ARI', // Additional Related Information
  NPA = 'NPA',
}

export enum transactionEnumV300 {
  ACK = 'ACK',
  DWR = 'DWR',
  EXC = 'EXC',
  ISA = 'ISA',
  ISR = 'ISR',
  LIC = 'LIC',
  WRK = 'WRK',
  ALT = 'ALT',
  DOT = 'DOT',
  FTV = 'FTV',
  IND = 'IND',
  INS = 'INS',
  MSG = 'MSG',
  NAT = 'NAT',
  NOT = 'NOT',
  NOW = 'NOW',
  NPN = 'NPN',
  NPR = 'NPR',
  NRC = 'NRC',
  NWN = 'NWN',
  OPT = 'OPT',
  OPU = 'OPU',
  ORN = 'ORN',
  OWK = 'OWK',
  PER = 'PER',
  PWR = 'PWR',
  REC = 'REC',
  SPT = 'SPT',
  SPU = 'SPU',
  SWR = 'SWR',
  SWT = 'SWT',
  WRI = 'WRI',
  XRF = 'XRF',
}
