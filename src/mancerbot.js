import Mastodon from 'mastodon-api';

import { getSettings } from './settings';
import { parseToot } from './tootparser';
import { runCommand } from './command';

const onMessageReceived = (settings, instance, message) => {
  const { event, data } = message;
  if (event === 'notification' && data.type === 'mention') {
    const toot = data.status;
    const author = data.account;

    parseToot(toot.content, (words, remainingText) => {
      runCommand(instance, settings, words[1], author.acct, words[2], remainingText);
    });
  }
};

export const startBot = () => {
  const settings = getSettings(`${__dirname}/../settings.json`);

  const instance = new Mastodon({
    access_token: settings.accessToken,
    api_url: settings.instanceUrl,
  });

  const listener = instance.stream('streaming/user');
  listener.on('message', (msg) => onMessageReceived(settings, instance, msg));
  listener.on('error', (err) => console.log(err));
  // listener.on('heartbeat', msg => console.log('Dadoum.'));

  console.log('Listening...');
};

export default startBot;
