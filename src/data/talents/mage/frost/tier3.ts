import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Piercing Ice', 'spell_frost_frostbolt', ['Increases the damage done by your Frost splls by ', '%.'], 3, [[2, 4, 6]]),
  new Talent(
    'Cold Snao',
    'spell_frost_wizardmark',
    ['When activated, this spell finishes the cooldown of all your Frost spells.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant',
    '10 min cooldown'
  ),
  new Talent(
    'Shatter',
    'spell_frost_frostshock',
    ['Increases the critical strike chance of all your spells against frozen targets by ', '%.'],
    5,
    [[10, 20, 30, 40, 50]],
    [{ x: 1, y: 2 }]
  ),
  new Talent(
    'Improved Blizzard',
    'spell_frost_icestorm',
    ['Increases the damage done by your Blizzard spell by ', '% and reduces the cast time by ', ' sec.'],
    2,
    [
      [10, 20],
      [1, 2],
    ],
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
      isMoved: false,
    }
  ),
]
export default tier3
