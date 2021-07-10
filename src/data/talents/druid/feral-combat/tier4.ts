import { Talent } from '../../Classes'

export default [
  new Talent('Improved Shred', 'shred', ['Reduces the Energy cost of your Shred ability by ', '.'], 2, [[6, 12]]),
  new Talent(
    'Predatory Strikes',
    'predatory-strikes',
    [
      'Increases your melee attack power while in Cat, Bear or Dire Bear form by ',
      '% of your level. In addition, increases your spell damage and healing by ',
      '% of your strength.',
    ],
    5,
    [
      [20, 40, 60, 80, 100],
      [20, 40, 60, 80, 100],
    ],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }]
  ),
  new Talent(
    'Blood Frenzy',
    'rip',
    ['Your critical strikes from Cat Form abilities that add combo points have a ', '% chance to add an additional combo point.'],
    2,
    [[50, 100]],
    [{ x: 2, y: 2 }]
  ),
  new Talent(
    'Primal Fury',
    'primal-fury',
    ['Gives you a ', '% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear or Dire Bear Form'],
    2,
    [[50, 100]],
    [{ x: 2, y: 2 }]
  ),
]
