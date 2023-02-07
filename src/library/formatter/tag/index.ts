export const getTag = (text: string): string => {
  return text.slice(0, 3);
}

export const findTag = (text: string, start: number, end: number) : string => {
  return text.slice(start, end);
}