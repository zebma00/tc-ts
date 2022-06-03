import { Talent } from '../../Classes'

const tier4 = [
  null,
  new Talent(
    'Vile Poisons',
    'ability_rogue_feigndeath',
    ['Increases the damage dealt by your poisons by ', '% and gives your poisons an additional ', '% increased chance to resist dispel effects.'],
    5,
    [
      [4, 8, 12, 16, 20],
      [8, 16, 24, 32, 40],
    ]
  ),
  new Talent('Improved Poisons', 'ability_poisons', ['Increases the chance to apply poisons to your target by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]

export default tier4
