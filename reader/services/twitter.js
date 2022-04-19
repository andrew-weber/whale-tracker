import { TwitterApi } from "twitter-api-v2";
import { parseTweet } from "../helpers/tweet-validator.js";
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
      start_time: "2022-04-15T00:00:00.00Z",
    });

    while (!result.done) {
      await result.fetchNext();
    }

    for (const { text: tweet, created_at: tweeted_at, id: tweet_id } of result
      .data.data) {
      const parsedTweet = parseTweet(tweet);
      if (parsedTweet) {
        await optionPosition.create({
          ...parsedTweet,
          tweet_id,
          full_tweet: tweet.replace(/\n/g, " "),
          tweeted_at,
        });
      }
    }
  }
}
