import { Talent } from '../../Classes';

export default [
  new Talent(
    'Celestial Spark',
    'starfire',
    ['Gives your Starfire spell a ', '% and your Wrath a ', '% chance to reset the cooldown of your Innervate.'],
    2,
    [
      [1, 2],
      [0.5, 1],
    ]
  ),
  new Talent(
    "Nature's Grace",
    'natures-grace',
    [
      'All spell criticals grace you with a blessing of nature, returning 25% of their mana cost and reducing the casting time of your next two spells by 0.5 sec.',
    ],
    1,
    [[1]],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }]
  ),
  new Talent(
    'Moonglow',
    'moonglow',
    ['Reduces the mana cost of your Starfire, Moonfire, Wrath, Healing Touch, Rejuvenation and Regrowth spells by ', '%.'],
    3,
    [[3, 6, 9]]
  ),
  null,
];
