import { Talent } from '../../Classes'

export default [
  new Talent('Improved Backstab', 'backstab', ['Increases the critical strike chance of your Backstab ability by ', '%.'], 3, [[10, 20, 30]]),
  new Talent(
    'Deflection',
    'deflection',
    ['Increases your parry chance by ', '%.'],
    3,
    [[1, 2, 3]],
    [{ x: null, y: null }],
    [{ x: 2, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent(
    'Precision',
    'precision',
    ['Increases your chance to hit with melee weapons by ', '%'],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]
