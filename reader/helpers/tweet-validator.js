const tweetMatch = RegExp(/^[$]\S{1,5} \d{4}-\d{2}-\d{2} [CP] [$]\d+.?\d*/);

export const isValidTweet = ({ text }) => {
  return tweetMatch.test(text);
};
