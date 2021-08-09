import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Death Wish',
    'rake',
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
    'faerie-fire',
    ['Reduces the cooldown of your Intercept ability by ', ' sec and increased its range by ', ' yards'],
    2,
    [
      [5, 10],
      [3, 6],
    ]
  ),
]
