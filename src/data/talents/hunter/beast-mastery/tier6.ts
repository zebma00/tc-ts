import { Talent } from '../../Classes'

export default [
  null,
  null,
  new Talent(
    'Frenzy',
    'frenzy',
    ['Gives your pet a ', '% chance to gain 30% attack speed increase for 8 sec after dealing a critical strike.'],
    5,
    [[20, 40, 60, 80, 100]],
    [{ x: 3, y: 2 }]
  ),
  null,
]
