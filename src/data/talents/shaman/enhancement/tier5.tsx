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
      <>
        Grants an additional effect to your weapon enhancements. <br />
        <br />
        Rockbiter: reduces physical damage taken by{' '}
      </>,
      <>
        %. <br />
        <br />
        Windfury: increases attack speed by{' '}
      </>,
      <>
        %. <br />
        <br />
        Flametongue: increases spell damage by{' '}
      </>,
      <>
        %. <br />
        <br />
        Frostbrand: your Frostbrand effect also reduces the mana cost of your spells by{' '}
      </>,
      '%.',
    ],
    2,
    [
      [5, 10],
      [5, 10],
      [5, 10],
      [5, 10],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    'Stormstrike',
    'spell_holy_sealofmight',
    ['Gives you an extra attack. In addition, the next two sources of direct Fire, Frost or Nature damage dealt to the target are increased by 20%. Lasts 20 sec.'],
    1,
    [[]],
    null,
    null,
    '21% of base mana',
    'Melee range',
    'Instant',
    '20 sec cooldown',
    null,
    { isNew: false, isChanged: true, isMoved: true }
  ),
  null,
]

export default tier5
