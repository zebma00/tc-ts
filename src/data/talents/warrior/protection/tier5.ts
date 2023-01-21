import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Improved Shield Wall', 'ability_warrior_shieldwall', ['Increases the duration of your Shield Wall by ', ' sec.'], 2, [[3, 5]]),
  new Talent(
    'Concussion Blow',
    'ability_thunderbolt',
    ['Stuns the target for 5 sec. Causes high threat while in defensive stance.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    '15 Rage',
    'Melee Range',
    'Instant cast',
    '45 sec cooldown',
    ['D2'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Bad Temper', 'ability_warrior_endlessrage', ['Gain ', ' rage when you take damage. 3 sec cooldown.'], 2, [[5, 1]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent(
    'Ignore Pain',
    'ability_warrior_focusedrage',
    ['Removes all movement impairing effects and all effects which cause loss of control of your character.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant cast',
    '5 min cooldown',
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier5
