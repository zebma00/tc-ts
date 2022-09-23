import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Improved Weapon Totems',
    'spell_fire_enchantweapon',
    ['Causes your Windfury Totem effect to also increase attack speed by ', '% and your Flametongue Totem effect to also increase spell damage by ', '%.'],
    2,
    [
      [2, 4],
      [2, 4],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent(
    'Elemental Weapons',
    'spell_fire_flametounge',
    [
      'Grants an additional effect to your weapon enhancements. Rockbiter: reduces physical damage taken by ',
      '%. Windfury: increases attack speed by ',
      '%. Flametongue: increases spell damage by ',
      "%. Frostbrand: your Frostbrand effect also reduces the target's attack speed by ",
      '%.',
    ],
    2,
    [
      [5, 10],
      [5, 10],
      [5, 10],
      [5, 10],
    ],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['R1'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    'Stormstrike',
    'spell_holy_sealofmight',
    ['Gives you an extra attack. In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%. Lasts 12 sec.'],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    '21% of base mana',
    'Melee range',
    'Instant',
    '20 sec cooldown',
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  null,
]

export default tier5
