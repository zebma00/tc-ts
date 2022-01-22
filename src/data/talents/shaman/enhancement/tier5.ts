import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Weapon Totems',
    'spell_fire_enchantweapon',
    ['Increases the melee attack power bonus of your Windfury Totem by ', '% and increases the effect of your Flametongue Totem by ', '%.'],
    2,
    [
      [15, 30],
      [25,50],
    ]
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
