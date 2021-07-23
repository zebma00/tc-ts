import { Talent } from '../../Classes'

export default [
  new Talent('Endurance', 'shadow-affinity', ['Reduces the cooldown of your Evasion and Sprint abilities by ', ' sec.'], 2, [[45, 90]]),
  new Talent(
    'Riposte',
    'counter-attack',
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
  null,
  new Talent(
    'Improved Sprint',
    'sprint',
    ['Gives a ', '% chance to remove all movement impairing effects when you activate your Sprint ability.'],
    2,
    [[50, 100]]
  ),
]
