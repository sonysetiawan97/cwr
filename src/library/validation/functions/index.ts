export const ifTagMatchThenCheckValid = (
  text: string,
  startTag: number,
  endTag: number,
  textSameAs: string | string[],
): boolean => {
  const tag = text.slice(startTag, endTag);

  if (Array.isArray(textSameAs)) {
    return textSameAs.includes(tag);
  }

  return tag === textSameAs;
};

export const ifTagMatchThenNeedRequiredAnotherTag = (
  text: string,
  startTag: number,
  endTag: number,
  textSameAs: string | string[],
  startTagRequired: number,
  endTagRequired: number,
): boolean => {
  const tag: string = text.slice(startTag, endTag);
  let isHave: boolean = false;

  if (Array.isArray(textSameAs)) {
    isHave = textSameAs.includes(tag);
  } else {
    isHave = tag === textSameAs;
  }

  if (isHave) {
    const tagRequired: string = text.slice(startTagRequired, endTagRequired);
    return tagRequired !== null || tagRequired !== '';
  }

  return true;
};

export const ifTagDateMustValid = (text: string, startTag: number, endTag: number): boolean => {
  const tagDate: string = text.slice(startTag, endTag);
  const stringDate: string = tagDate.substring(0, 4) + '/' + tagDate.substring(4, 6) + '/' + tagDate.substring(6);
  const date: Date = new Date(stringDate);

  return date instanceof Date && date !== null && date !== undefined;
};

export const ifTagProvideThenAnotherTagRequired = (
  text: string,
  startTag: number,
  endTag: number,
  startAnotherTag: number,
  endAnotherTag: number,
): boolean => {
  const tagProvide = text.slice(startTag, endTag);
  if (tagProvide) {
    const anotherTagProvide = text.slice(startAnotherTag, endAnotherTag);
    if (anotherTagProvide) {
      return true;
    }
    return false;
  }

  return true;
};
