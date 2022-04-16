const tweetMatch = RegExp(/^[$]\S{1,5} \d{4}-\d{2}-\d{2} [CP] [$]\d+.?\d*/);

export const isValidTweet = (text) => {
  return tweetMatch.test(text);
};

export const parseTweet = (text) => {
  if (!isValidTweet(text)) {
    return null;
  }

  const ticker = RegExp(/^[$]\S{1,5}/).exec(text)[0];
  const expiry = RegExp(/\d{4}-\d{2}-\d{2}/).exec(text)[0];
  const option_type = RegExp(/[CP]/).exec(text)[0];
  const strike_price = RegExp(/[$]\d+.?\d*/).exec(text)[0];

  return {
    ticker,
    expiry,
    option_type,
    strike_price,
  };
};
