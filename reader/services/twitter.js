import { TwitterApi } from "twitter-api-v2";
import { isValidTweet } from "../helpers/tweet-validator.js";
import { optionPosition } from "./db/index.js";

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

    for (const { text: tweet, created_at: tweeted_at, id: tweet_id } of result
      .data.data) {
      if (isValidTweet(tweet)) {
        await optionPosition.create({
          ticker: tweet.split(" ")[0],
          full_tweet: tweet.replace(/\n/g, " "),
          tweet_id,
          tweeted_at,
        });
      }
    }
  }
}
