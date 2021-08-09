import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Vengeance',
    'ability_racial_avatar',
    [
      'Gives you a ',
      '% bonus to your physical and Holy damage after dealing a critical strike from a weapon swing, spell, or ability. This effect stacks up to 3 times. Lasts 15 sec.',
    ],
    5,
    [[2, 4, 6, 8, 10]],
    [{ x: 2, y: 1 }]
  ),
  null,
  null,
]
