import { Talent } from '../../Classes'

const tier3 = [
  null,
  new Talent('Shared Pain', 'spell_shadow_skull', ['Your next Shadow Word: Pain affects all enemies within 10 yards of the target.'], 1, [[]], null, [{ x: 1, y: 1 }], null, null, 'Instant', '30 sec cooldown', null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Improved Mind Blast', 'spell_shadow_unholyfrenzy', ['Reduces the cooldown of your Mind Blast by ', ' sec.'], 5, [[0.5, 1, 1.5, 2, 2.5]]),
  new Talent(
    'Mind Flay',
    'spell_shadow_siphonmana',
    ["Assault the target's mind with Shadow energy, causing 75 Shadow damage over 3 sec and slowing their movement speed by 50%."],
    1,
    [[]],
    null,
    null,
    '45 Mana',
    '20 yd range',
    'Channeled (3 sec cast)'
  ),
]

export default tier3
