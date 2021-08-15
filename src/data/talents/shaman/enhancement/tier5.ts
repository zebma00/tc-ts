import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Weapon Totems',
    'spell_fire_enchantweapon',
    ['Your Windfury Totem also increases attack speed by ', '% and your Flametongue Totem also increases spell damage and healing by ', '%.'],
    2,
    [
      [2, 4],
      [2, 4],
    ]
  ),
  new Talent(
    'Elemental Weapons',
    'spell_fire_flametounge',
    [
      'Improves your weapon enhancing spells. Rockbiter Weapon: Also reduces physical damage taken by ',
      '%.Flametongue Weapon: Also increases your spell damage and healing by ',
      '% Frostbrand Weapon: Also reduces the attack speed of the affected target by ',
      '%. Windfury Weapon: Also Increases your attack speed by ',
      '%.',
    ],
    3,
    [
      [5, 10, 15],
      [5, 10, 15],
      [5, 10, 15],
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
