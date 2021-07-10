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
  new Talent('Improved Serpent Sting', 'serpent-sting', ['Increases the damage of your Serpent Sting by ', '%.'], 2, [[5, 10]]),
  null,
]
