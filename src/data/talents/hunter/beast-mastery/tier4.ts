import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Improved Mend Pet',
    'ability_hunter_mendpet',
    [
      'Gives your mend Pet spell a ',
      '% chance to remove 1 poison, disease, curse of magic effect from your pet each tick and increases the time your mend pet lasts by ',
      ' sec.',
    ],
    2,
    [
      [15, 30],
      [2, 4],
    ]
  ),
  new Talent(
    'Ferocity',
    'inv_misc_monsterclaw_04',
    ['Increases the critical strike chance of your pets by ', '%.'],
    5,
    [[2, 4, 6, 8, 10]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]
