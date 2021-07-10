import { Talent } from '../../Classes'

export default [
  null,
  new Talent("Improved Hunter's Mark", 'hunters-mark', ['Causes ', "% of your Hunter's Mark ability to apply to melee attack power as well."], 5, [
    [20, 40, 60, 80, 100],
  ]),
  new Talent(
    'Lethal Shots',
    'lethal-shots',
    ['Increases your critical strike chance with ranged weapons by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ['D3']
  ),

  null,
]
