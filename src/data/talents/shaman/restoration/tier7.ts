import { Talent } from '../../Classes'

const tier7 = [
  null,
  new Talent(
    'Mana Tide Totem',
    'spell_frost_summonwaterelemental',
    [
      "Summons a Mana Tide Totem at the feet of the caster with health equal to 20% of the Shaman's health for 12 sec that restores 170 mana and health to all party members within 20 yards every 3 sec.",
    ],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    null,
    '20 Mana',
    null,
    'Instant',
    '5 min cooldown',
    null,
    { isChanged: true, isMoved: false, isNew: false }
  ),
  null,
  null,
]

export default tier7
