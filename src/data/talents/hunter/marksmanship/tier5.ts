import { Talent } from '../../Classes'

export default [
  new Talent(
    'Scatter Shot',
    'scatter-shot',
    [
      'A short-range shot that deals 50% weapon damage and disorients the target for 4 sec. Any damage caused will remove the effect. Turns off your attack when used.',
    ],
    1,
    [[]],
    null,
    null,
    '8% of base mana',
    '15 yd range',
    '30 sec cooldown'
  ),
  new Talent(
    'Barrage',
    'barrage',
    ['Increases the damage done by your Multishot and Volley spells by ', '%.'],
    3,
    [[5, 10, 15]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent('Improvied Scorpid Sting', 'scorpid-sting', ['Your Scorpid Sting also increases all phisical damage dealt to the target by ', '%.'], 3, [
    [1, 2, 3],
  ]),
  null,
]
