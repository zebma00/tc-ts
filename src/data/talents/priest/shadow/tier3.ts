import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Spirit Tap',
    'spell_shadow_requiem',
    [
      'Gives you a ',
      '% chance to gain a 100% bonus to your spirit after an enemy that yields experience or honor is killed while effected by your Shadow Word: Pain. For the duration, your mana will regenerate at a 50% rate while casting. Lasts 15 sec.',
    ],
    5,
    [[20, 40, 60, 80, 100]]
  ),
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
  null,
]
