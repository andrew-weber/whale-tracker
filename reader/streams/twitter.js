import { ETwitterStreamEvent } from "twitter-api-v2";
import { isValidTweet } from "../helpers/tweet-validator";
export default class stream {
  client;

  constructor(client) {
    this.client = client;
  }

  async setupRules() {
    let rules = await this.client.v2.streamRules();
    console.log(rules);

    rules = await this.client.v2.streamRules();

    if (rules.meta.result_count === 0) {
      // const addedRules = await this.client.v2.updateStreamRules({
      //   add: [{ value: "from:unusual_whales", tag: "whale" }],
      // });
      // console.log("added:", addedRules);
    }
  }

  async stream() {
    const stream = await this.client.v2.searchStream();

    stream.on(
      // Emitted when a Twitter payload (a tweet or not, given the endpoint).
      ETwitterStreamEvent.Data,
      (eventData) => {
        const tweet = eventData.data.text;
        if (isValidTweet(tweet)) {
          console.log(tweet.replace(/\n/g, " "));
        }
      }
    );

    // Enable reconnect feature
    stream.autoReconnect = true;

    await stream.connect({
      autoReconnect: true,
      autoReconnectRetries: Infinity,
    });
  }
}
