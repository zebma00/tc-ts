import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Tranquil Spirit',
    'spell_holy_elunesgrace',
    ['Reduces the mana cost of your healing spells by ', '%.'],
    5,
    [[2, 4, 6, 8, 10]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D3'],
  ),
  null,
  new Talent(
    'Improved Rejuvenation',
    'spell_nature_rejuvenation',
    ['Causes your Rejuvenation to increase healing done to the target by ', '%. This effect does not stack.'],
    3,
    [[4, 7, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false
    }
  ),
]
