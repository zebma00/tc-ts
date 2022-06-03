import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Improved Shield Wall', 'ability_warrior_shieldwall', ['Increases the duration of your Shield Wall by ', ' sec.'], 2, [[3, 5]]),
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
  new Talent('Improved Shield Bash', 'ability_warrior_shieldbash', ['Gives your Shield Bash a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent(
    'Intervene',
    'ability_warrior_victoryrush',
    ['Run at high speed towards a party member, intercepting the next melee or ranged attack made against them.'],
    1,
    [[]],
    null,
    null,
    '10 Rage',
    '8 - 25 yd range',
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
