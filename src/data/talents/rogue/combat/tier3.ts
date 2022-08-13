import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Endurance', 'spell_shadow_shadowward', ['Reduces the cooldown of your Evasion and Sprint abilities by ', ' sec.'], 2, [[45, 90]]),
  new Talent(
    'Riposte',
    'ability_warrior_challange',
    ["A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and disarms the target for 6 sec."],
    1,
    [[]],
    [{ x: 1, y: 1 }],
    null,
    '10 Energy',
    'Melee range',
    'Instant',
    '6 sec cooldown'
  ),
  new Talent(
    'Dual Wield Specialization',
    'ability_dualwield',
    ['Increases the damage of your off-hand weapon by ', '%.'],
    5,
    [[10, 20, 30, 40, 50]],
    [{ x: 1, y: 2 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  new Talent(
    'Shiv',
    'inv_throwingknife_04',
    ['Performs an instant off-hand weapon attack that automatically applies the poison from your off-hand weapon to the target. Slower weapons require more Energy. Awards 1 combo point.'],
    1,
    [[]],
    null,
    null,
    '20 Energy',
    'Instant',
    'Melee Range',
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
]

export default tier3
