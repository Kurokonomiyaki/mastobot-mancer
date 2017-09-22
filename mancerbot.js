import {
  IMAGE_FOLDER,
  INSTANCE_URL,
  ACCESS_TOKEN,
  WHAT_TO_SAY,
  REPLACEMENTS,
} from './settings';

import Mastodon from 'mastodon-api';
import HtmlParser from 'htmlparser';
import Str from 'underscore.string';

export const startBot = () => {
  const instance = new Mastodon ({
    access_token: ACCESS_TOKEN,
    api_url: `${INSTANCE_URL}/`,
  });

  const listener = instance.stream('streaming/user');
  listener.on('message', (msg) => onMessageReceived(instance, msg));
  listener.on('error', err => console.log(err));
  listener.on('heartbeat', msg => console.log('Dadoum.'));

  console.log('Listening...');
};

const onMessageReceived = (instance, message) => {
  const { event, data } = message;
  // console.log(data);
  
  if (event === 'notification' && data.type === 'mention') {
    const toot = data.status;
    const author = data.account;

    const handler = new HtmlParser.DefaultHandler((error, dom) => {
      if (error != null) {
        console.log('Parse error', error);
        return;
      }

      const text = [];
      if (dom.length > 0 && dom[0].children != null) {
        dom.forEach((p) => {
          p.children.forEach((child) => {
            if (child.type === 'text') {
              text.push(child.data);
            }
          });
        });
      }

      if (text.length > 0) {
        const words = splitText(text.join(' '));
        runCommand(instance, words[0], author.acct, words[1]);
      }
      // console.log(JSON.stringify(dom, null, 2));
    });
    const parser = new HtmlParser.Parser(handler);
    parser.parseComplete(toot.content);
  }
};

const splitText = (text) => {
  text = Str.cleanDiacritics(text);
  return Str.words(text.toLowerCase());
};

const runCommand = (instance, command, from, to) => {
  console.log('Running', command, from, to);

  const key = REPLACEMENTS[command] || command;
  const funcs = WHAT_TO_SAY[key];
  if (funcs == null || from == null || to == null) {
    return;
  }

  const func = randomPick(funcs);
  const text = func(`@${from}`, `@${to}`);

  instance.post('statuses', {
    status: text,
    visibility: 'direct',
  });
};

const randomPick = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}