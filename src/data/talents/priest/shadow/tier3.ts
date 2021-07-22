import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Mind Blast', 'mind-blast', ['Reduces the cooldown of your Mind Blast by ', ' sec.'], 5, [[0.5, 1, 1.5, 2, 2.5]]),
  new Talent(
    'Mind Flay',
    'mind-flay',
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
