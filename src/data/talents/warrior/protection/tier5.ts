import { Talent } from '../../Classes'

export default [
  new Talent('Improved Intimidating Shout', 'natures-swiftness', ['Reduces the cooldown of Intimidating Shout by ', ' minutes.'], 2, [[1, 2]]),
  new Talent(
    'Concussion Blow',
    'gift-of-nature',
    ['Stuns the target for 5 sec.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    '15 Rage',
    'Melee Range',
    'Instant cast',
    '45 sec cooldown',
    ['D2']
  ),
  new Talent('Improved Shield Wall', 'tranquility', ['Increases the duration of your Shield Wall by ', ' sec.'], 2, [[3, 5]]),
  null,
]
