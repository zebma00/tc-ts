import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Efficiency', 'spell_frost_wizardmark', ['Reduces the Mana cost of your Shots and Stings by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
  new Talent(
  'Mortal Shots',
  'ability_piercedamage',
  ['Increases your ranged critical strike damage bonus by ', '%.'],
  5,
  [[6, 12, 18, 24, 30]],
  [{ x: 0, y: 2 }]
  )
]
