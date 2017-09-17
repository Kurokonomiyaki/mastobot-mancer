export const INSTANCE_URL = 'https://localhost:4000/api/v1';
export const ACCESS_TOKEN = '424fc742702b27cfbb4d9b04e9cd6d7ec41cbfea90a92e90a4b81938901b1d5c';

export const REPLACEMENTS = {
  'coffee': 'coffee',
  'cafe': 'coffee',
  'caffe': 'coffee',
  'coffe': 'coffee',
  'kawa': 'coffee',

  'tea': 'tea',
  'thé': 'tea',
  'the': 'tea',

  'birthday': 'birthday',
  'annif': 'birthday',
  'anif': 'birthday',
  'anniv': 'birthday',
  'aniv': 'birthday',
  'anniversaire': 'birthday',
  
  /*'gateau': 'cake',
  'biscuit': 'cookie',
  'glace': 'icecream',

  'hamburger': 'burger',
  'cheeseburger': 'burger',*/
};

export const WHAT_TO_SAY = {
  coffee: [
    (from, to) => makeHallumancer(`${to} Here is some coffee!`, '☕'),
    (from, to) => makeHallumancer(`${to} Have some coffee from ${from}!`, '☕'),
    (from, to) => makeHallumancer(`${to} What about a delicious coffee?`, '☕'),
    (from, to) => makeHallumancer(`${to} Hello, ${from} wants to offer you a coffee!`, '☕'),
    (from, to) => makeHallumancer(`${to} Enjoy a warm and delicious coffee! Offered by ${from}.`, '☕'),
    (from, to) => makeHallumancer(`${to} Black, with sugar or with milk? I can cast all the coffee you want!`, '☕'),
    (from, to) => makeHallumancer(`${to} Hey, ${from} thinks you deserve a coffee! Agreed!`, '☕'),
    (from, to) => makeHallumancer(`${to} Be prepared! ${from} invoked the coffeemancer for you!`, '☕'),
    (from, to) => makeHallumancer(`${to} Black like magic!`, '☕'),
  ],

  tea: [
    (from, to) => makeMancer(`${to} Here is some tea!`, '🍵'),
    (from, to) => makeMancer(`${to} Have some tea from ${from}!`, '🍵'),
    (from, to) => makeMancer(`${to} What about a delicious and flavored tea?`, '🍵'),
    (from, to) => makeMancer(`${to} Hello, ${from} wants to offer you this cup of tea!`, '🍵'),
    (from, to) => makeMancer(`${to} Enjoy What about a warm and flavored tea! Offered by ${from}.`, '🍵'),
    (from, to) => makeMancer(`${to} Black, green, with sugar or with milk? I can cast all the tea you want!`, '🍵'),
    (from, to) => makeMancer(`${to} Hey, ${from} thinks you deserve a nice cup of tea! Agreed!`, '🍵'),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the teamancer for you!`, '🍵'),
    (from, to) => makeMancer(`${to} Green like magic!`, '☕'),            
  ],

  birthday: [
    (from, to) => makeMancer(`${to} Is it your birthday? Neat!`, CAKES),
    (from, to) => makeMancer(`${to} A happy birthday from ${from}!`, CAKES),
    (from, to) => makeMancer(`${to} How nice, ${from} remembered it\'s your birthday today!`, CAKES),   
    (from, to) => makeMancer(`${to} Happy birthday! Let me cast something for you.`, CAKES),
    (from, to) => makeMancer(`${to} Hello, ${from} wishes you a happy birthday.`, CAKES),
    (from, to) => makeMancer(`${to} Hey, ${from} reminded me of your birthday!`, CAKES),
  ],

  cookie: [
    (from, to) => makeMancer(`${to} Would you like a cookie?`, '🍪'),
    (from, to) => makeMancer(`${to} Here, have a cookie from ${from}!`, '🍪'),
    (from, to) => makeMancer(`${to} Hey, ${from} thinks you deserve a cookie!`, '🍪'),   
    (from, to) => makeMancer(`${to} Yum, there is chocolate in it!`, '🍪'),
    (from, to) => makeMancer(`${to} A fresh baked cookie, offered by ${from}.`, '🍪'),
    (from, to) => makeMancer(`${to} Cookie!`, '🍪'),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the cookiemancer for you!`, '🍪'),
  ],

  pizza: [
    (from, to) => makeMancer(`${to} Hello, ${from} wants to share a pizza with you.`, '🍕'),
    (from, to) => makeMancer(`${to} A nice pizza, offered by ${from}!`, '🍕'),
    (from, to) => makeMancer(`${to} Hey, ${from} thinks you deserve this pizza!`, '🍕'),   
    (from, to) => makeMancer(`${to} Yum, ${from} wants you to have this delicous pizza.`, '🍕'),
    (from, to) => makeMancer(`${to} Regina, veggie, margherita? I can cast any pizza for you! Even with pineapples!`, '🍕'),
    (from, to) => makeMancer(`${to} Pizza!`, '🍕'),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the pizzamancer for you!`, '🍕'),
  ],
};


const CAKES = ['🎂', '🍰', '🎁', '🍾', '🎂🍾', '🍰🍾', '🎶🎂🎶', '🎶🍰🎶', '🎶🎁🎶', '🎶🍾🎶'];
const DRINKS = ['🍷', '🍸', '🍹', '🍺'];

const SPARKLES = [
  '☆ﾟ.*',
  '☆ﾟ๑*',
  '*:･ﾟ✧',
  '*･ﾟ๑',
  '☆ﾟ*･｡ﾟ',
  '*ﾟ✲*☆',
  '✩⁺˚✲°',
  '✧ﾟ.*・',
  '✲ﾟ๑*.°',
];

const FACES = [
  ...HALLUMANCER_FACES,
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
];
const makeMancer = (before, item, faces = FACES) => {
  if (Array.isArray(item)) {
    item = randomPick(item);
  }

  const face = randomPick(FACES);
  const sparkles = randomPick(SPARKLES);
  
  return `${before}\n(∩ ${face} )⊃━${sparkles}${item}`.trim();
}


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
];
const makeHallumancer = (before, item, faces = HALLUMANCER_FACES) => {
  return makeMancer(before, item, faces);
}

const randomPick = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}