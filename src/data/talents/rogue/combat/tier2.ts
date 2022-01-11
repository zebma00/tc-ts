import { Talent } from '../../Classes'

export default [
  new Talent('Improved Backstab', 'ability_backstab', ['Increases the critical strike chance of your Backstab ability by ', '%.'], 3, [
    [10, 20, 30],
  ]),
  null,
  new Talent(
    'Precision',
    'ability_marksmanship',
    ['Increases your chance to hit with melee weapons by ', '%'],
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
  new Talent('Lightning Reflexes', 'spell_nature_invisibilty', ['Increases your dodge chance by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
]
