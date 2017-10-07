import {
  CUSTOM_SPARKLES,
  CUSTOM_FACES,
  CUSTOM_HALLU_FACES,
  CUSTOM_LOVE_MOUTHES,
  CUSTOM_LOVE_EYES,
  CUSTOM_LOVE_CASTS,
  TOOT_OPTIONS,
} from './settings';

import { randomPick } from './util';


const SPARKLES = [
  '☆ﾟ.*',
  '☆ﾟ๑*',
  '*:･ﾟ✧',
  '✧°๑･⁺｡',
  '*･ﾟ๑°',
  '☆ﾟ*･｡ﾟ',
  '*ﾟ✲*☆',
  '✩⁺˚✲°',
  '✧ﾟ.*・',
  '✲ﾟ๑*.°',
  ...CUSTOM_SPARKLES,
];

const HALLUMANCER_FACES = [
  '◉ ᗜ ◉',
  '☼ ᗜ ☼',
  '⚆ ᗜ ⚆',
  '◔ ᗜ ◔',
  '• ᗜ •',
  '° ᗜ °',
  '* ᗜ *',
  '@ ᗜ @',
  '◉ ◡ ◉',
  '☼ ◡ ☼',
  ...CUSTOM_HALLU_FACES,
];

const FACES = [
  'ᵔ ◡ ᵔ',
  'ﾟ ◡ ﾟ',
  '⚆ ◡ ⚆',
  '◔ ◡ ◔',
  '• ◡ •',
  'ᵔ ᴥ ᵔ',
  'ﾟ ᴥ ﾟ',
  '⚆ ᴥ ⚆',
  '◔ ᴥ ◔',
  '• ᴥ •',
  'ᵔ ω ᵔ',
  'ﾟ ω ﾟ',
  '⚆ ω ⚆',
  '◔ ω ◔',
  '• ω •',
  'ᵔ ʖ ᵔ',
  'ﾟ ʖ ﾟ',
  '⚆ ʖ ⚆',
  '◔ ʖ ◔',
  '• ʖ •',
  ...HALLUMANCER_FACES,
  ...CUSTOM_FACES,
];


const BREAKFAST = ['🥞', '🥖', '🥐', '🥐🥖', '🥐🍞', '🥞☕', '🥞🍵', '🥐☕', '🥐🍵'];
const BUNNIES = ['🐰', '🐇', '🐰🐇', '🐇🐰'];
const CAKES = ['🎂', '🍰'];
const BIRTHDAY = [...CAKES, '🎁', '🍾', '🎂🍾', '🍰🍾', '🎂🥂', '🍰🥂', '🎶🎂🎶', '🎶🍰🎶', '🎶🎁🎶', '🎶🍾🎶'];
const DRINKS = ['🍷', '🍸', '🍹', '🍺'];
const ICE_CREAMS = ['🍨', '🍧', '🍦'];
const FLOWERS = ['🦂', '💐', '🌸', '🏵', '🌹', '🥀', '🌺', '🌻', '🌼', '🌷'];
const CONGRATS = ['🎺', '🏆', '🏅', '👍', '👏'];

/** LOVEMANCER */
const BILOVE = '❤💜💙';
const TRANSLOVE = '💙❤🖤❤💙';
const RAINBOWLOVE = '❤💛💚💜';
const LOVE = ['❤', '💙', '💚', '💛', '💜', '💕', '💖', '❤♥❤', BILOVE, TRANSLOVE, RAINBOWLOVE, ...CUSTOM_LOVE_CASTS];

const LOVEMANCER_MOUTHES = ['ᗜ', '◡', 'ᴥ', 'ω', 'v', 'з', '◇', ...CUSTOM_LOVE_MOUTHES];
const LOVEMANCER_EYES = ['❤', '💙', '💚', '💛', '💜', ...CUSTOM_LOVE_EYES];
/** */


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
};
/** */


/** MANCER BUILDERS */
const makeMancer = (before, item, faces = FACES) => {
  let castedItem = item;
  if (Array.isArray(item)) {
    castedItem = randomPick(item);
  }

  let face = faces;
  if (Array.isArray(faces)) {
    face = randomPick(faces);
  }
  const sparkles = randomPick(SPARKLES);

  return `${before}\n(∩ ${face} )⊃━${sparkles}${castedItem}`.trim();
};

const makeHallumancer = (before, item, faces = HALLUMANCER_FACES) => {
  return makeMancer(before, item, faces);
};

const makeLovemancer = (before, item) => {
  const eye = randomPick(LOVEMANCER_EYES);
  const mouth = randomPick(LOVEMANCER_MOUTHES);
  const face = `${eye} ${mouth} ${eye}`;
  return makeMancer(before, item, face);
};
/** */


const COMMANDS = {
  coffee: [
    (from, to) => makeHallumancer(`${to} Here is some coffee! (offered by ${from})`, '☕'),
    (from, to) => makeHallumancer(`${to} Have some coffee from ${from}!`, '☕'),
    (from, to) => makeHallumancer(`${to} What about a delicious coffee, offered by ${from}?`, '☕'),
    (from, to) => makeHallumancer(`${to} Hello, ${from} wants to offer you a coffee!`, '☕'),
    (from, to) => makeHallumancer(`${to} Enjoy a warm and delicious coffee! Offered by ${from}.`, '☕'),
    (from, to) => makeHallumancer(`${to} Black, with sugar or with milk? Under the command of ${from}, I can cast all the coffee you want!`, '☕'),
    (from, to) => makeHallumancer(`${to} Hey, ${from} thinks you deserve a coffee! Agreed!`, '☕'),
    (from, to) => makeHallumancer(`${to} Be prepared! ${from} invoked the coffeemancer for you!`, '☕'),
    (from, to) => makeHallumancer(`${to} Black like magic! (and offered by ${from})`, '☕'),
  ],

  tea: [
    (from, to) => makeMancer(`${to} Here is some tea! (offered by ${from})`, '🍵'),
    (from, to) => makeMancer(`${to} Have some tea from ${from}!`, '🍵'),
    (from, to) => makeMancer(`${to} What about a delicious and flavored tea, offered by ${from}?`, '🍵'),
    (from, to) => makeMancer(`${to} Hello, ${from} wants to offer you this cup of tea!`, '🍵'),
    (from, to) => makeMancer(`${to} Enjoy What about a warm and flavored tea! Offered by ${from}.`, '🍵'),
    (from, to) => makeMancer(`${to} Black, green, with sugar or with milk? Under the command of ${from}, I can cast all the tea you want!`, '🍵'),
    (from, to) => makeMancer(`${to} Hey, ${from} thinks you deserve a nice cup of tea! Agreed!`, '🍵'),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the teamancer for you!`, '🍵'),
    (from, to) => makeMancer(`${to} Green like magic!  (and offered by ${from})`, '🍵'),
  ],

  birthday: [
    (from, to) => makeMancer(`${to} Is it your birthday? Neat!`, BIRTHDAY),
    (from, to) => makeMancer(`${to} A happy birthday from ${from}!`, BIRTHDAY),
    (from, to) => makeMancer(`${to} How nice, ${from} remembered it's your birthday today!`, BIRTHDAY),
    (from, to) => makeMancer(`${to} Hi, ${from} wants to wish you a happy birthday! Let me cast something for you.`, BIRTHDAY),
    (from, to) => makeMancer(`${to} Hello, ${from} wishes you a happy birthday.`, BIRTHDAY),
    (from, to) => makeMancer(`${to} Hey, ${from} reminded me of your birthday!`, BIRTHDAY),
  ],

  cookie: [
    (from, to) => makeMancer(`${to} Would you like a cookie? It's a gift from ${from}.`, '🍪'),
    (from, to) => makeMancer(`${to} Here, have a cookie from ${from}!`, '🍪'),
    (from, to) => makeMancer(`${to} Hey, ${from} thinks you deserve a cookie!`, '🍪'),
    (from, to) => makeMancer(`${to} Yum, there is chocolate in it and ${from} thinks you may enjoy some!`, '🍪'),
    (from, to) => makeMancer(`${to} A fresh baked cookie, offered by ${from}.`, '🍪'),
    (from, to) => makeMancer(`${to} Cookie! (offered by ${from})`, '🍪'),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the cookiemancer for you!`, '🍪'),
  ],

  pizza: [
    (from, to) => makeMancer(`${to} Hello, ${from} wants to share a pizza with you.`, '🍕'),
    (from, to) => makeMancer(`${to} A nice pizza, offered by ${from}!`, '🍕'),
    (from, to) => makeMancer(`${to} Hey, ${from} thinks you deserve this pizza!`, '🍕'),
    (from, to) => makeMancer(`${to} Yum, ${from} wants you to have this delicous pizza.`, '🍕'),
    (from, to) => makeMancer(`${to} Regina, veggie, margherita? Under the command of ${from}, I can cast any pizza for you! Even with pineapples!`, '🍕'),
    (from, to) => makeMancer(`${to} Pizza! (offered by ${from})`, '🍕'),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the pizzamancer for you!`, '🍕'),
  ],

  dango: [
    (from, to) => makeMancer(`${to} Here, have some dangos from ${from}!`, '🍡'),
    (from, to) => makeMancer(`${to} Hey, ${from} thinks you deserve something sweet and squishy!`, '🍡'),
    (from, to) => makeMancer(`${to} Sweet, flavored and soft! (offered by ${from})`, '🍡'),
    (from, to) => makeMancer(`${to} Rice, red bean, green tea. It's dango time! (offered by ${from})`, '🍡'),
    (from, to) => makeMancer(`${to} Some dangos and a warm cup of green tea, yum! (offered by ${from})`, '🍡🍵'),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the dangomancer for you!`, '🍡'),
  ],

  icecream: [
    (from, to) => makeMancer(`${to} Here, have a sweet ice cream from ${from}!`, ICE_CREAMS),
    (from, to) => makeMancer(`${to} Hey, ${from} would like to offer you this ice cream`, ICE_CREAMS),
    (from, to) => makeMancer(`${to} Yum! Ice cream! (offered by ${from})`, ICE_CREAMS),
    (from, to) => makeMancer(`${to} Vanilla, strawberry, chocolate, pistachio? Under the command of ${from}, I can cast any ice cream for you!`, ICE_CREAMS),
    (from, to) => makeMancer(`${to} It's hot in here, would you like some ice cream? ${from} thinks you would.`, ICE_CREAMS),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the icecreamancer for you!`, ICE_CREAMS),
  ],

  love: [
    (from, to) => makeLovemancer(`${to} Hey, ${from} asked me to send you some love!`, LOVE),
    (from, to) => makeLovemancer(`${to} Hello, ${from} would like to offer you a little bit of love.`, LOVE),
    (from, to) => makeLovemancer(`${to} Hello, ${from} wants to hug you!`, LOVE),
    (from, to) => makeLovemancer(`${to} It looks like ${from} wants you to have some love!`, LOVE),
    (from, to) => makeLovemancer(`${to} You're cute and ${from} sends you love!`, LOVE),
    (from, to) => makeLovemancer(`${to} Oh! ${from} thinks you would like a little bit of love.`, LOVE),
    (from, to) => makeLovemancer(`${to} Be prepared! ${from} invoked the lovemancer for you!`, LOVE),
  ],

  breakfast: [
    (from, to) => makeMancer(`${to} Hey, ${from} wants to share his breakfast with you!`, BREAKFAST),
    (from, to) => makeMancer(`${to} Would you like to have breakfast with ${from}?`, BREAKFAST),
    (from, to) => makeMancer(`${to} Did you sleep well? What about some breakfast offered by ${from}!`, BREAKFAST),
    (from, to) => makeMancer(`${to} A nice day starts with a nice breakfast, said ${from}!`, BREAKFAST),
    (from, to) => makeMancer(`${to} Something sweet? Maybe with tea or coffee? ${from} offers you this breakfast!`, BREAKFAST),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the breakfastmancer for you!`, BREAKFAST),
  ],

  bunny: [
    (from, to) => makeMancer(`${to} What a nice little bunny ${from} wants you to have!`, BUNNIES),
    (from, to) => makeMancer(`${to} Bunnies, bunnies everywhere! (from ${from})`, BUNNIES),
    (from, to) => makeMancer(`${to} It looks like ${from} wants to pet some bunnies with you!`, BUNNIES),
    (from, to) => makeMancer(`${to} I heard ${from} say "Awww".`, BUNNIES),
    (from, to) => makeMancer(`${to} Oh! ${from} sends you cute bunnies!`, BUNNIES),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the bunnymancer for you!`, BUNNIES),
  ],

  flower: [
    (from, to) => makeMancer(`${to} Hey, ${from} asked me to send you some flowers!`, FLOWERS),
    (from, to) => makeMancer(`${to} Hello, ${from} would like to offer you some nice flowers.`, FLOWERS),
    (from, to) => makeMancer(`${to} Have some flowers from ${from}!`, FLOWERS),
    (from, to) => makeMancer(`${to} It looks like ${from} wants to offer you some flowers!`, FLOWERS),
    (from, to) => makeMancer(`${to} Some little flowers for you, from ${from}.`, FLOWERS),
    (from, to) => makeMancer(`${to} Oh! ${from} thinks you deserve some flowers.`, FLOWERS),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the flowermancer for you!`, FLOWERS),
  ],

  congratulations: [
    (from, to) => makeMancer(`${to} Hey, ${from} wants to express its congratulations to you!`, CONGRATS),
    (from, to) => makeMancer(`${to} You know what? ${from} thinks you're the best!`, CONGRATS),
    (from, to) => makeMancer(`${to} Hello, ${from} believes congratulations are in order here!`, CONGRATS),
    (from, to) => makeMancer(`${to} Oh! ${from} would like to compliment you for your achievements!`, CONGRATS),
    (from, to) => makeMancer(`${to} How nice! ${from} wants you to know that you did very well!`, CONGRATS),
    (from, to) => makeMancer(`${to} It looks like ${from} was very impressed by what you did!`, CONGRATS),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the congratmancer for praising you!`, CONGRATS),
  ],
};


export const runCommand = (instance, command, fromAddr, toAddr) => {
  console.log('Running', command, fromAddr, toAddr);

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
  const text = func(from, to);

  instance.post('statuses', Object.assign({
    status: text,
  }, TOOT_OPTIONS));
};

export default runCommand;
