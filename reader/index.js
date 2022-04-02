import { ETwitterStreamEvent, TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi(process.env.TWITTER_BEARER); // (create a client)

let rules = await client.v2.streamRules();
console.log('rules:', rules.meta.result_count) 
console.log(rules)

// const deleteRules = await client.v2.updateStreamRules({
//   delete: {
//     ids: ['1510087591818932226']
//   }
// });     
// console.log(deleteRules)

rules = await client.v2.streamRules();

if (rules.meta.result_count === 0) {
  const addedRules = await client.v2.updateStreamRules({
    add: [
      { value: 'from:unusual_whales', tag: 'whale' },
    ],
  });     
  console.log('added:', addedRules)
}


const stream = await client.v2.searchStream();

stream.on(
  // Emitted when Node.js {response} is closed by remote or using .close().
  ETwitterStreamEvent.ConnectionClosed,
  () => console.log('Connection has been closed.'),
);

stream.on(
  // Emitted when a Twitter payload (a tweet or not, given the endpoint).
  ETwitterStreamEvent.Data,
  eventData => console.log('Twitter has sent something:', eventData),
);

// stream.on(
//   // Emitted when a Twitter sent a signal to maintain connection active
//   ETwitterStreamEvent.DataKeepAlive,
//   () => console.log('Twitter has a keep-alive packet.'),
// );

// Enable reconnect feature
stream.autoReconnect = true;

await stream.connect({ autoReconnect: true, autoReconnectRetries: Infinity });