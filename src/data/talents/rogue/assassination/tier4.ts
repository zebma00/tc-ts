import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Vile Poisons',
    'ability_rogue_feigndeath',
    ['Increases the damage dealt by your poisons by ', '% and gives your poisons an additional ', '% increased chance to resist dispel effects.'],
    3,
    [
      [7, 14, 20],
      [13, 27, 40],
    ],
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
      isMoved: false
    }
  ),
  new Talent('Improved Poisons', 'ability_poisons', ['Increases the chance to apply poisons with your off-hand weapon  by ', '%.'], 3, [
    [10, 20, 30],
  ],
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
      isMoved: false
    }
  ),
  null,
]
