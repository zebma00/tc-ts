import { Talent } from '../../Classes'

export default [
  new Talent('Dual Wield Specialization', 'shred', ['Increases the damage done by your off-hand weapon by ', '%.'], 5, [[5, 10, 15, 20, 25]]),
  new Talent('Improved Execute', 'predatory-strikes', ['Reduces the Rage cost of your Execute by ', '.'], 2, [[2, 5]]),
  new Talent(
    'Enrage',
    'rip',
    ['Gives you a ', '% damage increase for 12 sec or a maximum of 12 swings after being the victim of a critical strike.'],
    5,
    [[5, 10, 15, 20, 25]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]
