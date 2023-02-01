export const formatTimeType = (time: string, size: number): string => {
  const regex = new RegExp(/\:/gi);
  const text = time.replace(regex, '');

  return text.padEnd(size).substring(0, size);
};
