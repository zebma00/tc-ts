import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Inner Focus',
    'inner-focus',
    ['When activated, reduces the mana cost of your next spell by 100% and increases its critical strike chance by 25%.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant',
    '3 min cooldown'
  ),
  new Talent(
    'Meditation',
    'divine-intellect',
    ['Allows ', '% of your mana regeneration to continue while casting.'],
    3,
    [[10, 20, 30]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]
