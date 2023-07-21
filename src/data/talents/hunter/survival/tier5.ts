import { Talent } from '../../Classes'

export default [
  new Talent('Resourcefulness', 'ability_hunter_mastertactitian', ['Allows one additional trap to be active at a time.'], 1, [[]], null, null, null, null, null, null, null, { isNew: true, isChanged: false, isMoved: false }),
  new Talent('Killer Instinct', 'spell_holy_blessingofstamina', ['Increases your critical strike chance with all attacks by ', '%.'], 3, [[1, 2, 3]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D2']),
  new Talent(
    'Counterattack',
    'ability_warrior_challange',
    ["A strike that becomes active after parrying an opponent's attack. This attack deals 40 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried"],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    '45 Mana',
    'Melee range',
    'Instant',
    '5 sec cooldown'
  ),
]
