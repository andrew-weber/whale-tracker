import twitterService from "./services/twitter.js";
import twitterStream from "./streams/twitter.js";

const twitter = new twitterService();
const stream = new twitterStream(twitter.client);

// await stream.setupRules();
await stream.stream();

// await twitter.getTweets();
