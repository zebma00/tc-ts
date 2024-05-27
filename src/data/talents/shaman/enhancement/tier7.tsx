import { Talent } from '../../Classes'

const tier7 = [
  null,
  new Talent(
    'Stormstrike',
    'spell_holy_sealofmight',
    [
      <>
        Gives you an extra attack, increases the damage of your next Shock spell by 30% and grants it an additional effect: <br />
        <br />
        Earth Shock: Taunts the target to attack you. <br />
        <br />
        Flame Shock: Apply the damage over time effect to all enemies within 10 yards of the target. <br />
        <br />
        Frost Shock: Roots the target in place for 4 sec.
      </>,
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    'Melee range',
    '8% of base mana',
    'Instant',
    '12 sec cooldown',
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
  null,
]

export default tier7
