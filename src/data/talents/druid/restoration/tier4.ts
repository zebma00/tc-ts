import { Talent } from '../../Classes'

const tier4 = [
  null,
  new Talent('Tranquil Spirit', 'spell_holy_elunesgrace', ['Reduces the mana cost of your healing spells by ', '%.'], 5, [[2, 4, 6, 8, 10]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D3']),
  null,
  new Talent(
    'Improved Innervate',
    'spell_nature_lightning',
    ['Increases the effect of your Innervate by ', '% when cast on self. You gain mana regeneration equal to ', '% of the Innervate effect when cast on another target.'],
    2,
    [
      [15, 30],
      [15, 30],
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

export default tier4
