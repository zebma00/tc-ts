import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Two-Handed Weapon Specialization',
    'inv_hammer_04',
    ['Increases the damage you deal with two-handed melee weapons by ', '% and increases your spell damage by ', '% of your attack power.'],
    3,
    [
      [2, 4, 6],
      [10, 20, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isMoved: false,
      isChanged: true,
      isNew: false,
    }
  ),
  null,
  new Talent(
    'Repentance',
    'spell_holy_prayerofhealing',
    ['Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids.'],
    1,
    [[]],
    null,
    null,
    '60 Mana',
    '20 yd range',
    'Instant',
    '60 sec cooldown',
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  null,
]

export default tier5
