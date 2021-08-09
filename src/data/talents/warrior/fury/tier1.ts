import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Booming Voice',
    'ferocity',
    ['Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by ', '% and reduces the rage cost by ', '.'],
    5,
    [
      [1, 2, 3, 4, 5],
      [10, 20, 30, 40, 50],
    ]
  ),
  new Talent('Cruelty', 'demoralizing-roar', ['Increases your chance to get a critical strike with melee weapons by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  null,
]
