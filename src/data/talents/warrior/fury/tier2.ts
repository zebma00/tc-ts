import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Slam',
    'shadowmeld',
    ['Reduces the casting time of your Slam ability by ', ' sec and causes your Slam to increase the damage of your next main hand attack by ', '%.'],
    5,
    [
      [0.2, 0.4, 0.6, 0.8, 1],
      [3, 6, 9, 12, 15],
    ]
  ),
  new Talent('Improved Demoralizing Shout', 'bash', ['Increases the melee attack power reduction of Demoralizing Shout by ', '%.'], 3, [
    [10, 20, 30],
  ]),
  new Talent(
    'Unbridled Wrath',
    'thick-hide',
    ['Gives you a ', '% chance to gain an additional Rage point when dealing damage with melee weapons.'],
    5,
    [[8, 16, 24, 32, 40]]
  ),
  null,
]
