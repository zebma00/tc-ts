import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Serpent Sting', 'ability_hunter_quickshot', ['Increases the damage of your Serpent Sting by ', '%.'], 2, [[5, 10]]),
  new Talent(
    'Mortal Shots',
    'ability_piercedamage',
    ['Increases your ranged critical strike damage bonus by ', '%.'],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: 0, y: 2 }]
  ),
  null,
]
