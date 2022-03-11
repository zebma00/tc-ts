import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Improved Slam',
    'ability_warrior_decisivestrike',
    ['Reduces the casting time of your Slam ability by ', ' sec.'],
    5,
    [[0.2, 0.4, 0.6, 0.8, 1]],
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
  new Talent('Improved Intercept', 'ability_rogue_sprint', ['Reduces the cooldown of your Intercept ability by ', ' sec.'], 2, [[5, 10]]),
]

export default tier5
