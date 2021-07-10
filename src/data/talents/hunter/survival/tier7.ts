import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Wyvern Sting',
    'wyvern-sting',
    [
      'A stinging shot that causes the target to fall asleep for 12 sec. Any damage will cancel the effect. When the target wakes up, the Sting causes 300 damage over 12 sec. Only one sting can be active per hunter at a time.',
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    '115 Mana',
    '8 - 35 yd range',
    'Instant',
    '2 min cooldown'
  ),
]
