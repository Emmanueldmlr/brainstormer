export const shortenAccount = (
  account: string,
  firstTakeLength = 5,
  secondTakeLength = 4
) => {
  const firstChunk = account.substring(0, firstTakeLength);
  const secondChunk = account.substring(account.length - secondTakeLength);

  return `${firstChunk}...${secondChunk}`;
};

export const shortenText = (text: string) => {
  const length = 90;
  return text?.length > length ? `${text.substring(0, length)}...` : text;
};
