import { Talent } from '../../Classes'

export default [
  new Talent(
    'Guardian Totems',
    'stoneskin',
    ['Increases the effect of your Stoneskin Totem by ', '% and reduces the cooldown of your Grounding Totem by ', ' sec.'],
    2,
    [
      [10, 20],
      [1, 2],
    ]
  ),
  new Talent(
    'Thundering Strikes',
    'seal-righteousness',
    ['Increases your chance to get a critical strike with weapon attacks by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 3, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent('Improved Ghost Wolf', 'ghost-wolf', ['Reduces the cast time of your Ghost Wolf spell by ', ' sec.'], 2, [[1, 2]]),
  new Talent(
    'Improved Lightning Shield',
    'lightning-shield',
    ['Increases the damage done by your Lightning Shield orbs by ', '% and increases the number of charges by ', '.'],
    3,
    [
      [5, 10, 15],
      [1, 2, 3],
    ]
  ),
]
