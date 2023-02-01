export const formatDateType = (date: string, size: number): string => {
  const regex = new RegExp(/\//gi);
  const text = date.replace(regex, '');

  return text.padEnd(size).substring(0, size);
};
