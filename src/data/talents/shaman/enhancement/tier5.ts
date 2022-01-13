import { Talent } from '../../Classes'

export default [
  new Talent(
    'Shamanistic Focus',
    'spell_nature_elementalabsorption',
    [
      'After landing a melee critical strike, you have a ',
      '% chance to enter a focused state. The focused state reduces the mana cost of your next Shock spell by 60% and increases its critical strike chance by 20%.',
    ],
    2,
    [[50, 100]]
  ),
  new Talent(
    'Elemental Weapons',
    'spell_fire_flametounge',
    [
      'Increases the melee attack power bonus of your Rockbiter Weapon by ',
      '%, your Windfury Weapon effect by ',
      '% and increases the effect of your Flametongue Weapon and Frostbrand Weapon by ',
      '%.',
    ],
    3,
    [
      [7, 14, 20],
      [13, 27, 40],
      [5, 10, 15],
    ],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent('Parry', 'ability_parry', ['Allows you to parry enemy melee attacks.'], 1, [[]]),
  null,
]
