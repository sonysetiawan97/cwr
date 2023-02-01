export const formatStringType = (text: string, size: number): string => {
  return text.padEnd(size).substring(0, size);
};
