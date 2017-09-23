import {
  INSTANCE_URL,
  ACCESS_TOKEN,
  TOOT_OPTIONS,
  WHAT_TO_SAY,
  REPLACEMENTS,
} from './settings';

import Url from 'url';
import Path from 'path';
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
  listener.on('error', (err) => console.log(err));
  // listener.on('heartbeat', msg => console.log('Dadoum.'));

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
      if (dom.length > 0) {
        dom.forEach((child) => {
          domNodeToText(child, text);
        });
      }

      if (text.length > 0) {
        const words = Str.words(Str.cleanDiacritics(text.join(' ')).toLowerCase());
        runCommand(instance, words[1], author.acct, words[2]);
      }
      // console.log(JSON.stringify(dom, null, 2));
    });
    const parser = new HtmlParser.Parser(handler);
    parser.parseComplete(toot.content);
  }
};

const domNodeToText = (node, text = []) => {
  const { name, type, attribs = {}, children } = node;
  const { class: className } = attribs;

  // regular text
  if (type === 'text') {
    text.push(node.data);
    return;
  }

  // ignore invisible content (cw)
  if (className != null && className.includes('invisible')) {
    return;
  }

  // extract mentionned users
  if (name === 'a' && className != null && className.includes('mention')) {
    const { href } = attribs;
    if (href != null) {      
      const url = Url.parse(href);
      const { hostname, pathname } = url;

      if (pathname != null && hostname != null) {
        let userName = Path.posix.basename(pathname);
        if (userName != null) {
          text.push(`${userName}@${hostname}`);
        }
      }
      return;
    }
  }

  if (children != null && children.length > 0) {
    children.forEach((child) => {
      domNodeToText(child, text);
    });
  }
}

const runCommand = (instance, command, from, to) => {
  console.log('Running', command, from, to);

  const key = REPLACEMENTS[command] || command;
  const funcs = WHAT_TO_SAY[key];
  if (funcs == null || from == null || to == null) {
    return;
  }

  if (from.startsWith('@') === false) {
    from = `@${from}`;
  }
  if (to.startsWith('@') === false) {
    to = `@${to}`;
  }

  const func = randomPick(funcs);
  const text = func(from, to);

  instance.post('statuses', Object.assign({
    status: text,
  }, TOOT_OPTIONS));
};

const randomPick = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}