import HtmlParser from 'htmlparser';
import Str from 'underscore.string';
import Url from 'url';
import Path from 'path';

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
        const userName = Path.posix.basename(pathname);
        if (userName != null) {
          text.push(`${userName}@${hostname}`);
        }
      }
      return;
    }
  }

  // analyze children
  if (children != null && children.length > 0) {
    children.forEach((child) => {
      domNodeToText(child, text);
    });
  }
};

const analyzeTootDom = (dom) => {
  // console.log('dom', JSON.stringify(dom, null, 2));

  const words = [];
  if (dom.length > 0) {
    dom.forEach((child) => {
      domNodeToText(child, words);
    });
  }

  if (words.length === 0) {
    return null;
  }

  let text = words.join(' ').toLowerCase();
  text = Str.cleanDiacritics(text);
  text = text.toLowerCase();
  return Str.words(text);
};

export const parseToot = (toot, onResult) => {
  const handler = new HtmlParser.DefaultHandler((error, dom) => {
    if (error != null) {
      console.log('Parse error', error);
      return;
    }

    const words = analyzeTootDom(dom);
    onResult(words);
  });

  const parser = new HtmlParser.Parser(handler);
  parser.parseComplete(toot);
};

export default parseToot;
