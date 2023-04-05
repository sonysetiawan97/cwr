export const formatRecordPrefix = (tag: string, transactionOrder: number = 0, transactionLineOrder: number = 0) => {
  const sizeHeaderTag: number = 3;
  const sizeTransactionOrderTag: number = 8;
  const sizeTransactionLineOrderTag: number = 8;

  const headerTag: string = formatText(tag, sizeHeaderTag);
  const transactionOrderTag: string = formatText(
    formatNumber(transactionOrder.toString(), sizeTransactionOrderTag),
    sizeTransactionOrderTag,
  );
  const transactionLineOrderTag: string = formatText(
    formatNumber(transactionLineOrder.toString(), sizeTransactionLineOrderTag),
    sizeTransactionLineOrderTag,
  );
  return `${headerTag}${transactionOrderTag}${transactionLineOrderTag}`;
};

const formatNumber = (text: string, size: number): string => {
  return text.padStart(size, '0');
};

const formatText = (value: string, size: number) => {
  return value.padEnd(size).substring(0, size);
};
