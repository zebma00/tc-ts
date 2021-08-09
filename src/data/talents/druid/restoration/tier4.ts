import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Tranquil Spirit',
    'spell_holy_elunesgrace',
    ['Reduces the mana cost of your Healing Touch and Tranquility spells by ', '%.'],
    5,
    [[2, 4, 6, 8, 10]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D3']
  ),
  null,
  new Talent('Improved Rejuvenation', 'spell_nature_rejuvenation', ['Increases the effect of your rejuvenation spell by ', '%.'], 3, [[5, 10, 15]]),
]
