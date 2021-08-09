import { Talent } from '../../Classes'

export default [
  new Talent('Piercing Ice', 'spell_frost_frostbolt', ['Increases the damage done by your Frost splls by ', '%.'], 3, [[2, 4, 6]]),
  new Talent(
    'Cold Snap',
    'spell_frost_wizardmark',
    ['When activated, this spell finishes the cooldown on all of your Frost spells.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant',
    '10 min cooldown'
  ),
  null,
  new Talent(
    'Improved Blizzard',
    'spell_frost_icestorm',
    ['Increases the damage done by your Blizzard spell by ', '% and reduces the cast time by ', ' sec.'],
    2,
    [
      [10, 20],
      [1, 2],
    ]
  ),
]
