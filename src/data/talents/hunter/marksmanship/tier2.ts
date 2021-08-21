import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Efficiency', 'spell_frost_wizardmark', ['Reduces the Mana cost of your Shots and Stings by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent(
    'Lethal Shots',
    'ability_searingarrow',
    ['Increases your critical strike chance with ranged weapons by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  null,
]
