import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Shield Slam',
    'inv_shield_05',
    [
      'Slam the target with your shield, dealing 225 to 235 damage, modified by your Block value and dispells 1 magic effect from the target. Generates a hight amount of threat.',
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    '20 Rage',
    'Melee Range',
    'Instant cast',
    '6 sec cooldown',
    null,
    { isNew: false,
      isChanged: true,
      isMoved: false
    }
  ),
  null,
  null,
]
