import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Vile Poisons',
    'ability_rogue_feigndeath',
    [
      'Increases the damage dealt by your poisons by ',
      '% and gives your poisons an additional ',
      '% increased chance to resist dispel effects.',
    ],
    5,
    [
      [4, 8, 12, 16, 20],
      [8, 16, 24, 32, 40],
    ]
  ),
  new Talent(
    'Improved Poisons',
    'ability_poisons',
    ['Increases the chance to apply poisons with your off-hand weapon  by ', '%.'],
    5,
    [[6, 12, 18, 24, 30]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
]
