import { Talent } from '../../Classes'

export default [
  new Talent('Improved Backstab', 'ability_backstab', ['Increases the critical strike chance of your Backstab ability by ', '%.'], 3, [[10, 20, 30]]),
  new Talent(
    'Deflection',
    'ability_parry',
    ['Increases your parry chance by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
  ),
  new Talent(
    'Precision',
    'ability_marksmanship',
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
