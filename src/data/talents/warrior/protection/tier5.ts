import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier5 = [
  new Talent('Improved Shield Wall', 'ability_warrior_shieldwall', ['Increases the duration of your Shield Wall by ', ' sec.'], 2, [[3, 5]]),
=======
export default [
  new Talent('Improved Shield Wall', 'ability_warrior_shieldwall', ['Increases the duration of your Shield Wall by ', ' sec.'], 2, [
    [3, 5],
  ]),
>>>>>>> 8b33b65 (update talents + item class)
  new Talent(
    'Concussion Blow',
    'ability_thunderbolt',
    ['Stuns the target for 5 sec.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    '15 Rage',
    'Melee Range',
    'Instant cast',
    '45 sec cooldown',
    ['D2']
  ),
<<<<<<< HEAD
  new Talent('Improved Shield Bash', 'ability_warrior_shieldbash', ['Gives your Shield Bash a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent(
    'Focus Rage',
    'ability_warrior_focusedrage',
    [
      'While active, basic attacks consume up to 20 rage points based on weapon speed, dealing 10% additional damage per rage point spent. Attacks deal additional threat while in defensive stance. Lasts 10 sec or until cancelled.',
    ],
    1,
    [[]],
=======
  new Talent(
    'Improved Intimidating Shout',
    'ability_golemthunderclap',
    ['Reduces the cooldown of Intimidating Shout by ', ' minutes.'],
    2,
    [[1, 2]],
    null,
    null,
>>>>>>> 8b33b65 (update talents + item class)
    null,
    null,
    null,
    null,
    'Instant cast',
    '30 sec cooldown',
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier5
