'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runCommand = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _util = require('./util');

var _strings = require('./strings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** ALTERNATIVES */
var COMMAND_ALTS = {
  cafe: 'coffee',
  caffe: 'coffee',
  coffe: 'coffee',
  kawa: 'coffee',

  the: 'tea',

  annif: 'birthday',
  anif: 'birthday',
  anniv: 'birthday',
  aniv: 'birthday',
  anniversaire: 'birthday',

  chocolat: 'chocolate',
  choco: 'chocolate',

  chocolatchaud: 'cocoa',
  chocochaud: 'cocoa',
  hotchocolate: 'cocoa',
  hotchoco: 'cocoa',

  mochi: 'dango',

  glace: 'icecream',
  sorbet: 'icecream',

  amour: 'love',

  ptitdej: 'breakfast',
  petitdej: 'breakfast',
  ptidej: 'breakfast',
  tidej: 'breakfast',
  dej: 'breakfast',
  petitdejeuner: 'breakfast',

  rabbit: 'bunny',
  lapin: 'bunny',
  lapinou: 'bunny',

  flowers: 'flower',
  fleur: 'flower',
  fleurs: 'flower',
  bouquet: 'flower',

  congratulation: 'congratulations',
  congrats: 'congratulations',
  congrat: 'congratulations',
  bravo: 'congratulations',
  felicitations: 'congratulations',
  felicitation: 'congratulations',

  curiouscat: 'question',
  cc: 'question',
  questions: 'question',

  headpat: 'patpat'
};
/** */

/** MANCER BUILDERS */
var makeMancer = function makeMancer(_ref, before, item) {
  var faces = _ref.faces,
      sparkles = _ref.sparkles;

  var castedItem = item;
  if (Array.isArray(item)) {
    castedItem = (0, _util.randomPick)(item);
  }

  var face = faces;
  if (Array.isArray(faces)) {
    face = (0, _util.randomPick)(faces);
  }
  var sparkle = (0, _util.randomPick)(sparkles);

  return (before + '\n(\u2229 ' + face + ' )\u2283\u2501' + sparkle + castedItem).trim();
};

var makeHallumancer = function makeHallumancer(_ref2, before, item) {
  var halluFaces = _ref2.halluFaces,
      sparkles = _ref2.sparkles;

  return makeMancer({ faces: halluFaces, sparkles: sparkles }, before, item);
};

var makeLovemancer = function makeLovemancer(_ref3, before) {
  var loveEyes = _ref3.loveEyes,
      loveMouthes = _ref3.loveMouthes,
      loveCasts = _ref3.loveCasts,
      sparkles = _ref3.sparkles;

  var eye = (0, _util.randomPick)(loveEyes);
  var mouth = (0, _util.randomPick)(loveMouthes);
  var face = eye + ' ' + mouth + ' ' + eye;
  return makeMancer({ faces: face, sparkles: sparkles }, before, loveCasts);
};

var makeQuestionMancer = function makeQuestionMancer(strings, before, question) {
  var text = makeMancer(strings, before, _strings.QUESTIONS);
  return text + '\n\n' + question;
};
/** */

var COMMANDS = {
  coffee: [function (strings, from, to) {
    return makeHallumancer(strings, to + ' Here is some coffee! (offered by ' + from + ')', '☕');
  }, function (strings, from, to) {
    return makeHallumancer(strings, to + ' Have some coffee from ' + from + '!', '☕');
  }, function (strings, from, to) {
    return makeHallumancer(strings, to + ' What about a delicious coffee, offered by ' + from + '?', '☕');
  }, function (strings, from, to) {
    return makeHallumancer(strings, to + ' Hello, ' + from + ' wants to offer you a coffee!', '☕');
  }, function (strings, from, to) {
    return makeHallumancer(strings, to + ' Enjoy a warm and delicious coffee! Offered by ' + from + '.', '☕');
  }, function (strings, from, to) {
    return makeHallumancer(strings, to + ' Black, with sugar or with milk? Under the command of ' + from + ', I can cast all the coffee you want!', '☕');
  }, function (strings, from, to) {
    return makeHallumancer(strings, to + ' Hey, ' + from + ' thinks you deserve a coffee! Agreed!', '☕');
  }, function (strings, from, to) {
    return makeHallumancer(strings, to + ' Be prepared! ' + from + ' invoked the coffeemancer for you!', '☕');
  }, function (strings, from, to) {
    return makeHallumancer(strings, to + ' Black like magic! (and offered by ' + from + ')', '☕');
  }],

  tea: [function (strings, from, to) {
    return makeMancer(strings, to + ' Here is some tea! (offered by ' + from + ')', '🍵');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Have some tea from ' + from + '!', '🍵');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' What about a delicious and flavored tea, offered by ' + from + '?', '🍵');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hello, ' + from + ' wants to offer you this cup of tea!', '🍵');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Enjoy What about a warm and flavored tea! Offered by ' + from + '.', '🍵');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Black, green, with sugar or with milk? Under the command of ' + from + ', I can cast all the tea you want!', '🍵');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' thinks you deserve a nice cup of tea! Agreed!', '🍵');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the teamancer for you!', '🍵');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Green like magic!  (and offered by ' + from + ')', '🍵');
  }],

  birthday: [function (strings, from, to) {
    return makeMancer(strings, to + ' Is it your birthday? Neat!', _strings.BIRTHDAY);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' A happy birthday from ' + from + '!', _strings.BIRTHDAY);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' How nice, ' + from + ' remembered it\'s your birthday today!', _strings.BIRTHDAY);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hi, ' + from + ' wants to wish you a happy birthday! Let me cast something for you.', _strings.BIRTHDAY);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hello, ' + from + ' wishes you a happy birthday.', _strings.BIRTHDAY);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' reminded me of your birthday!', _strings.BIRTHDAY);
  }],

  cookie: [function (strings, from, to) {
    return makeMancer(strings, to + ' Would you like a cookie? It\'s a gift from ' + from + '.', '🍪');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Here, have a cookie from ' + from + '!', '🍪');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' thinks you deserve a cookie!', '🍪');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Yum, there is chocolate in it and ' + from + ' thinks you may enjoy some!', '🍪');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' A fresh baked cookie, offered by ' + from + '.', '🍪');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Cookie! (offered by ' + from + ')', '🍪');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the cookiemancer for you!', '🍪');
  }],

  chocolate: [function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' thinks you deserve a treat! Have some chocolate!', '🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hello, ' + from + ' wants to offer you some chocolate!', '🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Black, white or milk? Under the command of ' + from + ', I can cast all the chocolate you want!', '🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Wow, it\'s chocolate! ' + from + ' wants to share it with you.', '🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Black like magic! This chocolate is a gift from ' + from + '.', '🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Chocolate! (offered by ' + from + ')', '🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the chocomancer for you!', '🍫');
  }, function (strings, from, to) {
    return makeHallumancer(strings, to + ' Chocolate contains theobromine and is good for you! ' + from + ' thinks you may enjoy some.', '🍫');
  }],

  cocoa: [function (strings, from, to) {
    return makeMancer(strings, to + ' Here is some hot chocolate! (offered by ' + from + ')', '☕🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' It\'s cold out there? ' + from + ' wants to share a cup of hot chocolate with you!', '☕🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' What about a delicious coffee, offered by ' + from + '?', '☕🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hello, ' + from + ' wants to offer you this hot chocolate!', '☕🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Strong, spicy, vegan or with marshmallows? Under the command of ' + from + ', I can cast all the hot chocolate you want!', '☕🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' thinks you deserve this flavored hot chocolate! Agreed!', '☕🍫');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the cocoamancer for you!', '☕🍫');
  }],

  pizza: [function (strings, from, to) {
    return makeMancer(strings, to + ' Hello, ' + from + ' wants to share a pizza with you.', '🍕');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' A nice pizza, offered by ' + from + '!', '🍕');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' thinks you deserve this pizza!', '🍕');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Yum, ' + from + ' wants you to have this delicous pizza.', '🍕');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Regina, veggie, margherita? Under the command of ' + from + ', I can cast any pizza for you! Even with pineapples!', '🍕');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Pizza! (offered by ' + from + ')', '🍕');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the pizzamancer for you!', '🍕');
  }],

  dango: [function (strings, from, to) {
    return makeMancer(strings, to + ' Here, have some dangos from ' + from + '!', '🍡');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' thinks you deserve something sweet and squishy!', '🍡');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Sweet, flavored and soft! (offered by ' + from + ')', '🍡');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Rice, red bean, green tea. It\'s dango time! (offered by ' + from + ')', '🍡');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Some dangos and a warm cup of green tea, yum! (offered by ' + from + ')', '🍡🍵');
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the dangomancer for you!', '🍡');
  }],

  icecream: [function (strings, from, to) {
    return makeMancer(strings, to + ' Here, have a sweet ice cream from ' + from + '!', _strings.ICE_CREAMS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' would like to offer you this ice cream', _strings.ICE_CREAMS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Yum! Ice cream! (offered by ' + from + ')', _strings.ICE_CREAMS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Vanilla, strawberry, chocolate, pistachio? Under the command of ' + from + ', I can cast any ice cream for you!', _strings.ICE_CREAMS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' It\'s hot in here, would you like some ice cream? ' + from + ' thinks you would.', _strings.ICE_CREAMS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the icecreamancer for you!', _strings.ICE_CREAMS);
  }],

  love: [function (strings, from, to) {
    return makeLovemancer(strings, to + ' Hey, ' + from + ' asked me to send you some love!');
  }, function (strings, from, to) {
    return makeLovemancer(strings, to + ' Hello, ' + from + ' would like to offer you a little bit of love.');
  }, function (strings, from, to) {
    return makeLovemancer(strings, to + ' Hello, ' + from + ' wants to hug you!');
  }, function (strings, from, to) {
    return makeLovemancer(strings, to + ' It looks like ' + from + ' wants you to have some love!');
  }, function (strings, from, to) {
    return makeLovemancer(strings, to + ' You\'re cute and ' + from + ' sends you love!');
  }, function (strings, from, to) {
    return makeLovemancer(strings, to + ' Oh! ' + from + ' thinks you would like a little bit of love.');
  }, function (strings, from, to) {
    return makeLovemancer(strings, to + ' Be prepared! ' + from + ' invoked the lovemancer for you!');
  }],

  breakfast: [function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' wants to share his breakfast with you!', _strings.BREAKFAST);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Would you like to have breakfast with ' + from + '?', _strings.BREAKFAST);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Did you sleep well? What about some breakfast offered by ' + from + '!', _strings.BREAKFAST);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' A nice day starts with a nice breakfast, said ' + from + '!', _strings.BREAKFAST);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Something sweet? Maybe with tea or coffee? ' + from + ' offers you this breakfast!', _strings.BREAKFAST);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the breakfastmancer for you!', _strings.BREAKFAST);
  }],

  bunny: [function (strings, from, to) {
    return makeMancer(strings, to + ' What a nice little bunny ' + from + ' wants you to have!', _strings.BUNNIES);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Bunnies, bunnies everywhere! (from ' + from + ')', _strings.BUNNIES);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' It looks like ' + from + ' wants to pet some bunnies with you!', _strings.BUNNIES);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' I heard ' + from + ' say "Awww".', _strings.BUNNIES);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Oh! ' + from + ' sends you cute bunnies!', _strings.BUNNIES);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the bunnymancer for you!', _strings.BUNNIES);
  }],

  flower: [function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' asked me to send you some flowers!', _strings.FLOWERS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hello, ' + from + ' would like to offer you some nice flowers.', _strings.FLOWERS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Have some flowers from ' + from + '!', _strings.FLOWERS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' It looks like ' + from + ' wants to offer you some flowers!', _strings.FLOWERS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Some little flowers for you, from ' + from + '.', _strings.FLOWERS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Oh! ' + from + ' thinks you deserve some flowers.', _strings.FLOWERS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the flowermancer for you!', _strings.FLOWERS);
  }],

  congratulations: [function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' wants me to congratulate you! You\'re the best!', _strings.CONGRATS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' You know what? ' + from + ' thinks you did very well! Congrats!', _strings.CONGRATS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hello, ' + from + ' believes congratulations are in order here!', _strings.CONGRATS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Oh! ' + from + ' would like to compliment you for your achievements!', _strings.CONGRATS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' It looks like ' + from + ' was very impressed by what you did!', _strings.CONGRATS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the congratmancer for praising you!', _strings.CONGRATS);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Wow, ' + from + ' tolds me you did something very impressive! I\'m proud of you!', _strings.CONGRATS);
  }],

  patpat: [function (strings, from, to) {
    return makeMancer(strings, to + ' Hey, ' + from + ' wants to give you a headpat!', _strings.PATPAT);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' You know what? ' + from + ' thinks you deserves a pat on the head! *patpat*', _strings.PATPAT);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Hello, ' + from + ' believes headpats are in order here!', _strings.PATPAT);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Oh! ' + from + ' would like to headpat you!', _strings.PATPAT);
  }, function (strings, from, to) {
    return makeMancer(strings, to + ' Be prepared! ' + from + ' invoked the patpatmancer for patpat you!', _strings.PATPAT);
  }],

  question: [function (strings, from, to, question) {
    return makeQuestionMancer(strings, to + ' Hey, someone wants to ask you something!', question);
  }, function (strings, from, to, question) {
    return makeQuestionMancer(strings, to + ' A curious cat would like to ask you a question!', question);
  }, function (strings, from, to, question) {
    return makeQuestionMancer(strings, to + ' Someone wants to know more about you!', question);
  }, function (strings, from, to, question) {
    return makeQuestionMancer(strings, to + ' Oh! It looks like someone would be interested by your answer to this question!', question);
  }, function (strings, from, to, question) {
    return makeQuestionMancer(strings, to + ' Be prepared! Someone invoked the curiouscatmancer on you!', question);
  }]
};

var runCommand = exports.runCommand = function runCommand(instance, settings, command, fromAddr, toAddr, remainingText) {
  console.log('Running', command, fromAddr, toAddr, remainingText);

  var key = COMMAND_ALTS[command] || command;
  var funcs = COMMANDS[key];
  if (funcs == null || fromAddr == null || toAddr == null) {
    return;
  }

  var from = fromAddr;
  if (from.startsWith('@') === false) {
    from = '@' + from;
  }
  var to = toAddr;
  if (to.startsWith('@') === false) {
    to = '@' + to;
  }

  // if no host is specified, use from's host
  if (to.split('@').length - 1 === 1) {
    var fromHost = from.split('@')[2];
    to = to + '@' + fromHost;
  }

  var func = (0, _util.randomPick)(funcs);
  var text = func(settings.strings, from, to, remainingText);
  if (text == null) {
    return;
  }

  instance.post('statuses', (0, _assign2.default)({
    status: text
  }, settings.tootOptions));
};

exports.default = runCommand;