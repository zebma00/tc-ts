import { Talent } from '../../Classes'

export default [
  new Talent(
    'Holy Nova',
    'holy-nova',
    [
      'Causes an explosion of Holy light around the caster, dealing 29 to 34 Holy damage to enemies and healing allies for 54 to 63 within 10 yards. The effects cause no threat.',
    ],
    1,
    [[]],
    null,
    null,
    '185 Mana',
    null,
    'Instant'
  ),
  new Talent(
    'Blessed Recovery',
    'blessed-recovery',
    ['After being hit by a ranged or melee critical strike, heal for ', '% of the damage taken over 8 sec.'],
    3,
    [[8, 16, 25]]
  ),
  null,
  new Talent(
    'Inspiration',
    'lay-on-hands',
    ["Increases the target's armor by ", '% for 8 sec after getting a critical hit with Heal, Greater Heal, Flash Heal or Prayer of Healing.'],
    3,
    [[8, 16, 25]]
  ),
]
