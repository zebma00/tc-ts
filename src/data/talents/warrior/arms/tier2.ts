import { Talent } from '../../Classes'

export default [
  new Talent('Improved Overpower', 'inv_sword_05', ['Increases the critical strike chance of your Overpower by ', '%.'], 2, [[25, 50]]),
  new Talent('Tactical Mastery', 'spell_nature_enchantarmor', ['You retain up to ', ' rage points when you change stances.'], 5, [
    [5, 10, 15, 20, 25],
  ]),
  null,
  new Talent(
    'Improved Thunder Clap',
    'ability_thunderclap',
    ['Reduces the rage cost of your thunder clap by ', ' and increases its damage by ', '% when hitting a single target.'],
    3,
    [
      [1, 2, 3],
      [100, 200, 300],
    ]
  ),
]
