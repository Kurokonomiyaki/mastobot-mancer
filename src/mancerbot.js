import Mastodon from 'mastodon-api';

import { parseToot } from './tootparser';
import { runCommand } from './command';

import {
  INSTANCE_URL,
  ACCESS_TOKEN,
} from './settings';

const onMessageReceived = (instance, message) => {
  const { event, data } = message;
  if (event === 'notification' && data.type === 'mention') {
    const toot = data.status;
    const author = data.account;

    parseToot(toot.content, (words) => {
      runCommand(instance, words[1], author.acct, words[2]);
    });
  }
};

export const startBot = () => {
  const instance = new Mastodon({
    access_token: ACCESS_TOKEN,
    api_url: `${INSTANCE_URL}/`,
  });

  const listener = instance.stream('streaming/user');
  listener.on('message', (msg) => onMessageReceived(instance, msg));
  listener.on('error', (err) => console.log(err));
  // listener.on('heartbeat', msg => console.log('Dadoum.'));

  console.log('Listening...');
};

export default startBot;
