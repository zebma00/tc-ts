import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Improved Arcane Explosion',
    'spell_nature_wispsplode',
    ['Increases the critical strike chance of your Arcane Explosion spell by ', '%.'],
    3,
    [[2, 4, 6]]
  ),
  new Talent(
    'Arcane Potency',
    'spell_arcane_arcanepotency',
    ['Increases your mana gained from all sources by 30% while you have less than 30% of your total mana.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2'],
    { isNew: true,
      isChanged: false,
      isMoved: false
    }
  ),
  null,
]
