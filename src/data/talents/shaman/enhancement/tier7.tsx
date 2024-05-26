import { Talent } from '../../Classes'

const tier7 = [
  null,
  new Talent(
    'Stormstrike',
    'spell_holy_sealofmight',
    [
      <>
        Gives you an extra attack with an additional effect depending on your active weapon enhancement. <br />
        <br />
        Rockbiter: Deals an additional 70% weapon damage and taunts the target to attack the shaman. <br />
        <br />
        Windfury: Increases the shaman's attack speed by 20% for 8 sec. <br />
        <br />
        Flametongue: Increases the damage of your next damaging spell by 70%. <br />
        <br />
        Frostbrand: Deals an additional 50% of weapon damage as Frost damage and roots the target in place for 4 sec. <br />
      </>,
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    'Melee range',
    '8% of base mana',
    'Instant',
    '20 sec cooldown',
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
  null,
]

export default tier7
