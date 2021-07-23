import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Flurry',
    'rip',
    ['Increases your attack speed by ', '% for your next 3 swings after dealing a critical strike.'],
    5,
    [[10, 15, 20, 25, 30]],
    [{ x: 1, y: 1 }]
  ),
  new Talent('Ancestral Fortitude', 'arcane-focus', ['Increases your armor by ', '% and your chance to block and chance to dodge by ', '%'], 5, [
    [2, 4, 6, 8, 10],
    [1, 2, 3, 4, 5],
  ]),
  null,
]
