'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startBot = undefined;

var _mastodonApi = require('mastodon-api');

var _mastodonApi2 = _interopRequireDefault(_mastodonApi);

var _settings = require('./settings');

var _tootparser = require('./tootparser');

var _command = require('./command');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onMessageReceived = function onMessageReceived(settings, instance, message) {
  var event = message.event,
      data = message.data;

  if (event === 'notification' && data.type === 'mention') {
    var toot = data.status;
    var author = data.account;

    (0, _tootparser.parseToot)(toot.content, function (words, remainingText) {
      (0, _command.runCommand)(instance, settings, words[1], author.acct, words[2], remainingText);
    });
  }
};

var startBot = exports.startBot = function startBot() {
  var settings = (0, _settings.getSettings)(__dirname + '/../settings.json');

  var instance = new _mastodonApi2.default({
    access_token: settings.accessToken,
    api_url: settings.instanceUrl
  });

  var listener = instance.stream('streaming/user');
  listener.on('message', function (msg) {
    return onMessageReceived(settings, instance, msg);
  });
  listener.on('error', function (err) {
    return console.log(err);
  });
  // listener.on('heartbeat', msg => console.log('Dadoum.'));

  console.log('Listening...');
};

exports.default = startBot;