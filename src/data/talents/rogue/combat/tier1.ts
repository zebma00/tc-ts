import { Talent } from '../../Classes'

export default [
  new Talent('Improved Gouge', 'ability_gouge', ['Increases the duration of your Gouge ability by ', ' sec.'], 3, [[0.5, 1, 1.5]]),
  new Talent(
    'Deflection',
    'ability_parry',
    ['Increases your parry chance by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 2, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent('Improved Sinister Strike', 'spell_shadow_ritualofsacrifice', ['Reduces the energy cost of your Sinister Strike ', '.'], 2, [
    [3, 5],
  ]),
  null,
]
