import { ETwitterStreamEvent } from "twitter-api-v2";
import { parseTweet } from "../helpers/tweet-validator.js";
import { optionPosition } from "../services/db/index.js";

export default class stream {
  client;

  constructor(client) {
    this.client = client;
  }

  async setupRules() {
    let rules = await this.client.v2.streamRules();
    if (rules.meta.result_count === 0) {
      // const addedRules = await this.client.v2.updateStreamRules({
      //   add: [{ value: "from:unusual_whales", tag: "whale" }],
      // });
      // console.log("added:", addedRules);
    }
  }

  async stream() {
    const stream = await this.client.v2.searchStream({
      "tweet.fields": ["created_at"],
    });

    stream.on(ETwitterStreamEvent.Data, async (eventData) => {
      const {
        text: tweet,
        id: tweet_id,
        created_at: tweeted_at,
      } = eventData.data;
      const parsedTweet = parseTweet(tweet);
      if (parsedTweet) {
        await optionPosition.create({
          ...parsedTweet,
          tweet_id,
          full_tweet: tweet.replace(/\n/g, " "),
          tweeted_at,
        });
      }
    });

    // Enable reconnect feature
    stream.autoReconnect = true;

    await stream.connect({
      autoReconnect: true,
      autoReconnectRetries: Infinity,
    });
  }
}
