export const everyTagTransactions = (data: string[]): Array<string> => {
  const result: string[] = data.map((item) => item.slice(0, 3));
  return result;
};
