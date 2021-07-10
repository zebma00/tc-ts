import { Talent } from '../../Classes'

export default [
  new Talent('Magic Attunement', 'wrath', ['Increases the effect of your Dampen Magic and Amplify Magic spells by ', '%.'], 2, [[25, 50]]),
  new Talent('Improved Arcane Explosion', 'arcane-explosion', ['Increases the critical strike chance of your Arcane Explosion spell by ', '%.'], 3, [
    [2, 4, 6],
  ]),
  new Talent(
    'Arcane Resilience',
    'arcane-resilience',
    ['Increases your mana regeneration by 200% while you have less than 25%'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]
