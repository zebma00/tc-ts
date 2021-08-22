import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Arcane Instability',
    'spell_shadow_teleport',
    ['Increases your spell damage and critical strike chance by ', '%.'],
    3,
    [[1, 2, 3]],
    [{ x: 4, y: 1 }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent(
    'Unstable Missiles',
    'spell_nature_starfall',
    [
      'Casting Arcane Missiles increases the damage and Mana cost of your Arcane Missiles by ',
      '%. This effect stacks up to 3 times and lasts 8 sec.',
    ],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  null,
]
