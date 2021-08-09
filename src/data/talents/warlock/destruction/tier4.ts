import { Talent } from '../../Classes'

export default [
  new Talent(
    'Intensity',
    'rejuvenation',
    ['Gives you a ', '% chance to avoid interruption caused by damage while casting Rain of Fire, Hellfire and Soulfire.'],
    2,
    [[35, 70]],
    [{ x: null, y: null }],
    [{ x: 4, y: 0 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent('Destructive Reach', 'tranquil-spirit', ['Increases the range of your Destruction spells by ', '%.'], 2, [[10, 20]]),
  null,
  new Talent('Improved Searing Pain', 'rejuvenation', ['Increases the critical strike chance of your Searing Pain spell by ', '%.'], 3, [[3, 6, 9]]),
]
