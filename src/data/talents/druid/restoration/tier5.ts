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
    'Improved Innervate',
    'spell_nature_lightning',
    ['When cast on self, the duration of your Innervate is increased by ', ' sec. When cast on another target, you also gain an Innervate effect for ', ' sec.'],
    2,
    [
      [5, 10],
      [5, 10],
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
  null,
]

export default tier5
