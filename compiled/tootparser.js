'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseToot = undefined;

var _htmlparser = require('htmlparser');

var _htmlparser2 = _interopRequireDefault(_htmlparser);

var _underscore = require('underscore.string');

var _underscore2 = _interopRequireDefault(_underscore);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _he = require('he');

var _he2 = _interopRequireDefault(_he);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domNodeToText = function domNodeToText(node) {
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var name = node.name,
      type = node.type,
      _node$attribs = node.attribs,
      attribs = _node$attribs === undefined ? {} : _node$attribs,
      children = node.children;
  var className = attribs.class;

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
    var href = attribs.href;

    if (href != null) {
      var url = _url2.default.parse(href);
      var hostname = url.hostname,
          pathname = url.pathname;


      if (pathname != null && hostname != null) {
        var userName = _path2.default.posix.basename(pathname);
        if (userName != null) {
          text.push(userName + '@' + hostname);
        }
      }
      return;
    }
  }

  // analyze children
  if (children != null && children.length > 0) {
    children.forEach(function (child) {
      domNodeToText(child, text);
    });
  }
};

var analyzeTootDom = function analyzeTootDom(dom) {
  // console.log('dom', JSON.stringify(dom, null, 2));

  var texts = [];
  if (dom.length > 0) {
    dom.forEach(function (child) {
      domNodeToText(child, texts);
    });
  }

  if (texts.length === 0) {
    return null;
  }

  return _he2.default.decode(texts.join(' '));
};

var parseToot = exports.parseToot = function parseToot(toot, onResult) {
  var handler = new _htmlparser2.default.DefaultHandler(function (error, dom) {
    if (error != null) {
      console.log('Parse error', error);
      return;
    }

    var raw = analyzeTootDom(dom);
    var text = _underscore2.default.cleanDiacritics(raw);
    text = text.toLowerCase();
    var words = _underscore2.default.words(text);

    var rawWords = _underscore2.default.words(raw);
    var rawRemainingText = null;
    if (rawWords.length > 3) {
      rawRemainingText = rawWords.slice(3).join(' ');
    }

    onResult(words, rawRemainingText);
  });

  var parser = new _htmlparser2.default.Parser(handler);
  parser.parseComplete(toot);
};

exports.default = parseToot;