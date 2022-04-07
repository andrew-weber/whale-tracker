import { TwitterApi } from "twitter-api-v2";
import { isValidTweet } from "../helpers/tweet-validator";

export default class twitterService {
  client;

  constructor() {
    this.client = new TwitterApi(process.env.TWITTER_BEARER);
  }

  async getTweets() {
    const result = await this.client.v2.userTimeline("1200616796295847936", {
      "tweet.fields": ["created_at"],
      exclude: ["replies", "retweets"],
      start_time: "2022-04-05T00:00:00.00Z",
    });

    while (!result.done) {
      await result.fetchNext();
    }

    result.data.data.forEach(({ text: tweet, created_at }) => {
      if (isValidTweet(tweet)) {
        console.log(created_at, tweet.replace(/\n/g, " "));
      }
    });
    // const result2 = await result.next();
    // result2.data.data.forEach(({ text: tweet }) => {
    //   if (tweetMatch.test(tweet)) {
    //     console.log(tweet.replace(/\n/g, " "));
    //   }
    // });
  }
}
