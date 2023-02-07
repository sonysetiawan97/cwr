export const formatNumber999v99Type = (
  number: string,
  size: number,
  integerNumberSize: number = 3,
  decimalNumberSize: number = 2,
): string => {
  let [integerNumber, decimalNumber] = number.split('.');
  let integerNumberText = formatNumberDecimal(integerNumber, integerNumberSize);
  let decimalNumberText = formatNumberDecimal(decimalNumber, decimalNumberSize);

  const result = `${integerNumberText}${decimalNumberText}`;

  return result.toString().slice(-size);
};

const formatNumberDecimal = (text: string, size: number): string => {
  for (let start = 0; start < size; start++) {
    text += '0';
  }
  return text;
};
