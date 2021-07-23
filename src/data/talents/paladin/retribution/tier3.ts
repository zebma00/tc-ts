import { Talent } from '../../Classes'

export default [
  new Talent(
    'Pursuit of Justice',
    'pursuit-of-justice',
    ['Increases movement speed and mounted movement speed by ', '%. Does not stack with other movement increasing effects.'],
    2,
    [[4, 8]]
  ),
  new Talent(
    'Conviction',
    'conviction',
    ['Increases your chance to get a critical strike with Melee weapons by ', '%.'],
    5,
    [[1, 2, 3]],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }],
    null,
    null,
    null,
    null,
    ['D3']
  ),
  new Talent(
    'Sanctity Aura',
    'sanctity-aura',
    ['Increases Holy damage done by party members within 30 yards by 10%. Only one Aura can be active per paladin at a time.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant'
  ),
  null,
]
