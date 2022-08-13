import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Backstab', 'ability_backstab', ['Increases the critical strike chance of your Backstab ability by ', '%.'], 3, [[10, 20, 30]]),
  new Talent('Deflection', 'ability_parry', ['Increases your parry chance by ', '%.'], 5, [[1, 2, 3, 4, 5]], null, [{ x: 2, y: 1 }], null, null, null, null, ['D1']),
  new Talent(
    'Precision',
    'ability_marksmanship',
    ['Increases your chance to hit with melee weapons by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
]

export default tier2
