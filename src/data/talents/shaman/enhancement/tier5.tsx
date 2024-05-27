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
        Frostbrand: reduces the mana cost of your spells by{' '}
      </>,
      '%.',
    ],
    3,
    [
      [4, 7, 10],
      [4, 7, 10],
      [4, 7, 10],
      [4, 7, 10],
    ],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    'Shamanistic Rage',
    'spell_nature_shamanrage',
    ['Reduces all damage you take by 20% and gives your succesful melee attacks a chance to regenerate mana equal to 30% of your attack power. Lasts 15 sec.'],
    1,
    [[]],
    null,
    null,
    'Instant',
    '1 min cooldown',
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent(
    'Totemic Fury',
    'spell_fire_totemofwrath',
    ['Your critical strikes with melee attacks increase the effect of your totems that affect friendly targets by ', '% for 8 sec and reduce the cooldown of your totems that are on cooldown by 1 sec.'],
    2,
    [[15, 30]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier5
