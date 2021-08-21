import { Talent } from '../../Classes'

export default [
  new Talent('Dual Wield Specialization', 'ability_dualwield', ['Increases the damage done by your off-hand weapon by ', '%.'], 3, [[8, 16, 25]]),
  new Talent('Improved Execute', 'inv_sword_48', ['Reduces the Rage cost of your Execute by ', '.'], 2, [[2, 5]]),
  new Talent(
    'Enrage',
    'spell_shadow_unholyfrenzy',
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
