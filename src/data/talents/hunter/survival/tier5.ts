import { Talent } from '../../Classes'

export default [
  new Talent('Trap Launcher', 'ability_hunter_resourcefulness', ['When activated, your next Trap will be launched instantly at the enemy target.'], 1, [[]], null, null, '3% of base mana', '40 yd rang', 'Instant', '1 min cooldow', null, {
    isChanged: false,
    isMoved: false,
    isNew: true,
  }),
  new Talent('Killer Instinct', 'spell_holy_blessingofstamina', ['Increases your critical strike chance with all attacks by ', '%.'], 3, [[1, 2, 3]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D2']),
  new Talent(
    'Counterattack',
    'ability_warrior_challange',
    ["A strike that becomes active after parrying an opponent's attack. This attack deals 40 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried."],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    '45 Mana',
    'Melee range',
    'Instant',
    '5 sec cooldown'
  ),
  null,
]
