import { Talent } from '../../Classes'

export default [
  new Talent('Improved Cleave', 'ability_warrior_cleave', ['Increases the damage done by your Cleave ability by ', '%'], 3, [[40, 80, 120]],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  { isNew: false,
    isChanged: false,
    isMoved: true
  }
  ),
  new Talent(
    'Death Wish',
    'spell_shadow_deathpact',
    [
      'When activated, increases your damage done by 20% and makes you immune to fear effects, but reduces your armor and resistances by 20% for 30 sec.',
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    '10 Rage',
    null,
    'Instant cast',
    '3 min cooldown',
    ['D2']
  ),
  null,
  new Talent(
    'Improved Intercept',
    'ability_rogue_sprint',
    ['Reduces the cooldown of your Intercept ability by ', ' sec and increased its range by ', ' yards'],
    2,
    [
      [5, 10],
      [3, 6],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false,
      isChanged: true,
      isMoved: false
    }
  ),
]
