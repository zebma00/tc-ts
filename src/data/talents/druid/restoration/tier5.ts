import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    "Nature's Swiftness",
    'spell_nature_ravenform',
    ['When activated, your next Nature spell becomes an instant cast spell.'],
    1,
    [[]],
    [
      {
        x: 1,
        y: 0,
      },
    ],
    null,
    null,
    null,
    'Instant',
    '3 min cooldown'
  ),
  null,
  new Talent('Gift of Nature', 'spell_nature_protectionformnature', ['Increases the effect of all healing spells and the damage of your Nature spells by ', '%.'], 5, [[2, 4, 6, 8, 10]], [{ x: 2, y: 2 }], null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent(
    'Fury of Stormrage',
    'inv_staff_90',
    ['Reduces the mana cost of Wrath by ', '% and each time you deal damage with Wrath you have a ', '% chance to reduce the cast time of your next Healing Touch within 15 sec by 1.5 sec.'],
    2,
    [
      [50, 100],
      [10, 20],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier5
