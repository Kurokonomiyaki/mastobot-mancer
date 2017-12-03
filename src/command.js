import { randomPick } from './util';

import {
  BIRTHDAY,
  ICE_CREAMS,
  BREAKFAST,
  BUNNIES,
  FLOWERS,
  QUESTIONS,
  CONGRATS,
} from './strings';

/** ALTERNATIVES */
const COMMAND_ALTS = {
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
};
/** */


/** MANCER BUILDERS */
const makeMancer = ({ faces, sparkles }, before, item) => {
  let castedItem = item;
  if (Array.isArray(item)) {
    castedItem = randomPick(item);
  }

  let face = faces;
  if (Array.isArray(faces)) {
    face = randomPick(faces);
  }
  const sparkle = randomPick(sparkles);

  return `${before}\n(∩ ${face} )⊃━${sparkle}${castedItem}`.trim();
};

const makeHallumancer = ({ halluFaces, sparkles }, before, item) => {
  return makeMancer({ faces: halluFaces, sparkles }, before, item);
};

const makeLovemancer = ({ loveEyes, loveMouthes, loveCasts, sparkles }, before) => {
  const eye = randomPick(loveEyes);
  const mouth = randomPick(loveMouthes);
  const face = `${eye} ${mouth} ${eye}`;
  return makeMancer({ faces: face, sparkles }, before, loveCasts);
};

const makeQuestionMancer = (strings, before, question) => {
  const text = makeMancer(strings, before, QUESTIONS);
  return `${text}\n\n${question}`;
};
/** */


const COMMANDS = {
  coffee: [
    (strings, from, to) => makeHallumancer(strings, `${to} Here is some coffee! (offered by ${from})`, '☕'),
    (strings, from, to) => makeHallumancer(strings, `${to} Have some coffee from ${from}!`, '☕'),
    (strings, from, to) => makeHallumancer(strings, `${to} What about a delicious coffee, offered by ${from}?`, '☕'),
    (strings, from, to) => makeHallumancer(strings, `${to} Hello, ${from} wants to offer you a coffee!`, '☕'),
    (strings, from, to) => makeHallumancer(strings, `${to} Enjoy a warm and delicious coffee! Offered by ${from}.`, '☕'),
    (strings, from, to) => makeHallumancer(strings, `${to} Black, with sugar or with milk? Under the command of ${from}, I can cast all the coffee you want!`, '☕'),
    (strings, from, to) => makeHallumancer(strings, `${to} Hey, ${from} thinks you deserve a coffee! Agreed!`, '☕'),
    (strings, from, to) => makeHallumancer(strings, `${to} Be prepared! ${from} invoked the coffeemancer for you!`, '☕'),
    (strings, from, to) => makeHallumancer(strings, `${to} Black like magic! (and offered by ${from})`, '☕'),
  ],

  tea: [
    (strings, from, to) => makeMancer(strings, `${to} Here is some tea! (offered by ${from})`, '🍵'),
    (strings, from, to) => makeMancer(strings, `${to} Have some tea from ${from}!`, '🍵'),
    (strings, from, to) => makeMancer(strings, `${to} What about a delicious and flavored tea, offered by ${from}?`, '🍵'),
    (strings, from, to) => makeMancer(strings, `${to} Hello, ${from} wants to offer you this cup of tea!`, '🍵'),
    (strings, from, to) => makeMancer(strings, `${to} Enjoy What about a warm and flavored tea! Offered by ${from}.`, '🍵'),
    (strings, from, to) => makeMancer(strings, `${to} Black, green, with sugar or with milk? Under the command of ${from}, I can cast all the tea you want!`, '🍵'),
    (strings, from, to) => makeMancer(strings, `${to} Hey, ${from} thinks you deserve a nice cup of tea! Agreed!`, '🍵'),
    (strings, from, to) => makeMancer(strings, `${to} Be prepared! ${from} invoked the teamancer for you!`, '🍵'),
    (strings, from, to) => makeMancer(strings, `${to} Green like magic!  (and offered by ${from})`, '🍵'),
  ],

  birthday: [
    (strings, from, to) => makeMancer(strings, `${to} Is it your birthday? Neat!`, BIRTHDAY),
    (strings, from, to) => makeMancer(strings, `${to} A happy birthday from ${from}!`, BIRTHDAY),
    (strings, from, to) => makeMancer(strings, `${to} How nice, ${from} remembered it's your birthday today!`, BIRTHDAY),
    (strings, from, to) => makeMancer(strings, `${to} Hi, ${from} wants to wish you a happy birthday! Let me cast something for you.`, BIRTHDAY),
    (strings, from, to) => makeMancer(strings, `${to} Hello, ${from} wishes you a happy birthday.`, BIRTHDAY),
    (strings, from, to) => makeMancer(strings, `${to} Hey, ${from} reminded me of your birthday!`, BIRTHDAY),
  ],

  cookie: [
    (strings, from, to) => makeMancer(strings, `${to} Would you like a cookie? It's a gift from ${from}.`, '🍪'),
    (strings, from, to) => makeMancer(strings, `${to} Here, have a cookie from ${from}!`, '🍪'),
    (strings, from, to) => makeMancer(strings, `${to} Hey, ${from} thinks you deserve a cookie!`, '🍪'),
    (strings, from, to) => makeMancer(strings, `${to} Yum, there is chocolate in it and ${from} thinks you may enjoy some!`, '🍪'),
    (strings, from, to) => makeMancer(strings, `${to} A fresh baked cookie, offered by ${from}.`, '🍪'),
    (strings, from, to) => makeMancer(strings, `${to} Cookie! (offered by ${from})`, '🍪'),
    (strings, from, to) => makeMancer(strings, `${to} Be prepared! ${from} invoked the cookiemancer for you!`, '🍪'),
  ],

  pizza: [
    (strings, from, to) => makeMancer(strings, `${to} Hello, ${from} wants to share a pizza with you.`, '🍕'),
    (strings, from, to) => makeMancer(strings, `${to} A nice pizza, offered by ${from}!`, '🍕'),
    (strings, from, to) => makeMancer(strings, `${to} Hey, ${from} thinks you deserve this pizza!`, '🍕'),
    (strings, from, to) => makeMancer(strings, `${to} Yum, ${from} wants you to have this delicous pizza.`, '🍕'),
    (strings, from, to) => makeMancer(strings, `${to} Regina, veggie, margherita? Under the command of ${from}, I can cast any pizza for you! Even with pineapples!`, '🍕'),
    (strings, from, to) => makeMancer(strings, `${to} Pizza! (offered by ${from})`, '🍕'),
    (strings, from, to) => makeMancer(strings, `${to} Be prepared! ${from} invoked the pizzamancer for you!`, '🍕'),
  ],

  dango: [
    (strings, from, to) => makeMancer(strings, `${to} Here, have some dangos from ${from}!`, '🍡'),
    (strings, from, to) => makeMancer(strings, `${to} Hey, ${from} thinks you deserve something sweet and squishy!`, '🍡'),
    (strings, from, to) => makeMancer(strings, `${to} Sweet, flavored and soft! (offered by ${from})`, '🍡'),
    (strings, from, to) => makeMancer(strings, `${to} Rice, red bean, green tea. It's dango time! (offered by ${from})`, '🍡'),
    (strings, from, to) => makeMancer(strings, `${to} Some dangos and a warm cup of green tea, yum! (offered by ${from})`, '🍡🍵'),
    (strings, from, to) => makeMancer(strings, `${to} Be prepared! ${from} invoked the dangomancer for you!`, '🍡'),
  ],

  icecream: [
    (strings, from, to) => makeMancer(strings, `${to} Here, have a sweet ice cream from ${from}!`, ICE_CREAMS),
    (strings, from, to) => makeMancer(strings, `${to} Hey, ${from} would like to offer you this ice cream`, ICE_CREAMS),
    (strings, from, to) => makeMancer(strings, `${to} Yum! Ice cream! (offered by ${from})`, ICE_CREAMS),
    (strings, from, to) => makeMancer(strings, `${to} Vanilla, strawberry, chocolate, pistachio? Under the command of ${from}, I can cast any ice cream for you!`, ICE_CREAMS),
    (strings, from, to) => makeMancer(strings, `${to} It's hot in here, would you like some ice cream? ${from} thinks you would.`, ICE_CREAMS),
    (strings, from, to) => makeMancer(strings, `${to} Be prepared! ${from} invoked the icecreamancer for you!`, ICE_CREAMS),
  ],

  love: [
    (strings, from, to) => makeLovemancer(strings, `${to} Hey, ${from} asked me to send you some love!`),
    (strings, from, to) => makeLovemancer(strings, `${to} Hello, ${from} would like to offer you a little bit of love.`),
    (strings, from, to) => makeLovemancer(strings, `${to} Hello, ${from} wants to hug you!`),
    (strings, from, to) => makeLovemancer(strings, `${to} It looks like ${from} wants you to have some love!`),
    (strings, from, to) => makeLovemancer(strings, `${to} You're cute and ${from} sends you love!`),
    (strings, from, to) => makeLovemancer(strings, `${to} Oh! ${from} thinks you would like a little bit of love.`),
    (strings, from, to) => makeLovemancer(strings, `${to} Be prepared! ${from} invoked the lovemancer for you!`),
  ],

  breakfast: [
    (strings, from, to) => makeMancer(strings, `${to} Hey, ${from} wants to share his breakfast with you!`, BREAKFAST),
    (strings, from, to) => makeMancer(strings, `${to} Would you like to have breakfast with ${from}?`, BREAKFAST),
    (strings, from, to) => makeMancer(strings, `${to} Did you sleep well? What about some breakfast offered by ${from}!`, BREAKFAST),
    (strings, from, to) => makeMancer(strings, `${to} A nice day starts with a nice breakfast, said ${from}!`, BREAKFAST),
    (strings, from, to) => makeMancer(strings, `${to} Something sweet? Maybe with tea or coffee? ${from} offers you this breakfast!`, BREAKFAST),
    (strings, from, to) => makeMancer(strings, `${to} Be prepared! ${from} invoked the breakfastmancer for you!`, BREAKFAST),
  ],

  bunny: [
    (strings, from, to) => makeMancer(strings, `${to} What a nice little bunny ${from} wants you to have!`, BUNNIES),
    (strings, from, to) => makeMancer(strings, `${to} Bunnies, bunnies everywhere! (from ${from})`, BUNNIES),
    (strings, from, to) => makeMancer(strings, `${to} It looks like ${from} wants to pet some bunnies with you!`, BUNNIES),
    (strings, from, to) => makeMancer(strings, `${to} I heard ${from} say "Awww".`, BUNNIES),
    (strings, from, to) => makeMancer(strings, `${to} Oh! ${from} sends you cute bunnies!`, BUNNIES),
    (strings, from, to) => makeMancer(strings, `${to} Be prepared! ${from} invoked the bunnymancer for you!`, BUNNIES),
  ],

  flower: [
    (strings, from, to) => makeMancer(strings, `${to} Hey, ${from} asked me to send you some flowers!`, FLOWERS),
    (strings, from, to) => makeMancer(strings, `${to} Hello, ${from} would like to offer you some nice flowers.`, FLOWERS),
    (strings, from, to) => makeMancer(strings, `${to} Have some flowers from ${from}!`, FLOWERS),
    (strings, from, to) => makeMancer(strings, `${to} It looks like ${from} wants to offer you some flowers!`, FLOWERS),
    (strings, from, to) => makeMancer(strings, `${to} Some little flowers for you, from ${from}.`, FLOWERS),
    (strings, from, to) => makeMancer(strings, `${to} Oh! ${from} thinks you deserve some flowers.`, FLOWERS),
    (strings, from, to) => makeMancer(strings, `${to} Be prepared! ${from} invoked the flowermancer for you!`, FLOWERS),
  ],

  congratulations: [
    (strings, from, to) => makeMancer(strings, `${to} Hey, ${from} wants me to congratulate you! You're the best!`, CONGRATS),
    (strings, from, to) => makeMancer(strings, `${to} You know what? ${from} thinks you did very well! Congrats!`, CONGRATS),
    (strings, from, to) => makeMancer(strings, `${to} Hello, ${from} believes congratulations are in order here!`, CONGRATS),
    (strings, from, to) => makeMancer(strings, `${to} Oh! ${from} would like to compliment you for your achievements!`, CONGRATS),
    (strings, from, to) => makeMancer(strings, `${to} It looks like ${from} was very impressed by what you did!`, CONGRATS),
    (strings, from, to) => makeMancer(strings, `${to} Be prepared! ${from} invoked the congratmancer for praising you!`, CONGRATS),
    (strings, from, to) => makeMancer(strings, `${to} Wow, ${from} tolds me you did something very impressive! I'm proud of you!`, CONGRATS),
  ],

  question: [
    (strings, from, to, question) => makeQuestionMancer(strings, `${to} Hey, someone wants to ask you something!`, question),
    (strings, from, to, question) => makeQuestionMancer(strings, `${to} A curious cat would like to ask you a question!`, question),
    (strings, from, to, question) => makeQuestionMancer(strings, `${to} Someone wants to know more about you!`, question),
    (strings, from, to, question) => makeQuestionMancer(strings, `${to} Oh! It looks like someone would be interested by your answer to this question!`, question),
    (strings, from, to, question) => makeQuestionMancer(strings, `${to} Be prepared! Someone invoked the curiouscatmancer on you!`, question),
  ],
};

export const runCommand = (instance, settings, command, fromAddr, toAddr, remainingText) => {
  console.log('Running', command, fromAddr, toAddr, remainingText);

  const key = COMMAND_ALTS[command] || command;
  const funcs = COMMANDS[key];
  if (funcs == null || fromAddr == null || toAddr == null) {
    return;
  }

  let from = fromAddr;
  if (from.startsWith('@') === false) {
    from = `@${from}`;
  }
  let to = toAddr;
  if (to.startsWith('@') === false) {
    to = `@${to}`;
  }

  // if no host is specified, use from's host
  if (to.split('@').length - 1 === 1) {
    const fromHost = from.split('@')[2];
    to = `${to}@${fromHost}`;
  }

  const func = randomPick(funcs);
  const text = func(settings.strings, from, to, remainingText);
  if (text == null) {
    return;
  }

  instance.post('statuses', Object.assign({
    status: text,
  }, settings.tootOptions));
};

export default runCommand;
