import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Torment',
    'ability_warlock_everlastingaffliction',
    ['Whenever a target affected by your Corruption dies, ', "% of the remaining damage is added to your active Corruption effects. In addition, your active Corruption's durations are refreshed."],
    2,
    [[50, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isChanged: false,
      isMoved: false,
      isNew: true,
    }
  ),
  new Talent('Siphon Life', 'spell_shadow_requiem', ['Transfers 15 health from the target to the caster every 3 sec. Lasts 30 sec.'], 1, [[]], [{ x: null, y: null }], [{ x: 5, y: 1 }], '150 Mana', '30 yd range', 'Instant', null, ['D1']),
  new Talent(
    'Curse of Exhaustion',
    'spell_shadow_grimward',
    ["Reduces the target's movement speed by 10% for 12 sec. Only one curse can be active per Warlock on a target."],
    1,
    [[1]],
    null,
    [{ x: 4, y: 3 }],
    '8% of base mana',
    '30 yd range',
    'Instant',
    null,
    ['R1']
  ),
  new Talent('Improved Curse of Exhaustion', 'spell_shadow_grimward', ['Increases the speed reduction of your Curse of Exhaustion by ', '%.'], 2, [[10, 20]], [{ x: 4, y: 2 }], null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
]

export default tier5
