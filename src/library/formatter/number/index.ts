export const formatNumberType = (number: number, size: number): string => {
  let text = '';

  for (let start = 0; start < size; start++) {
    text += '0';
  }

  text += number.toString();

  return text.slice(-size);
};
