import { Talent } from '../../Classes'

export default [
  new Talent(
    'Pathfinding',
    'ability_mount_jungletiger',
    [
      'Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ',
      '% and increases the outdoor movement speed of your pet by ',
      '%.',
    ],
    2,
    [
      [3, 6],
      [15, 30],
    ]
  ),
  new Talent(
    'Bestial Recuperation',
    'ability_hunter_catlikereflexes',
    ['Damage that would otherwise kill your pet will instead reduce it to 25% of its total health. This effect has a 1 minute cooldown.'],
    1,
    [[]]
  ),
  new Talent(
    'Thick Hide',
    'inv_misc_pelt_bear_03',
    ['Increases the armor rating of your pets by ', "% and increases your pet's chance to dodge or resist area of effect damage by ", '%.'],
    3,
    [
      [10, 20, 30],
      [25, 50, 75],
    ]
  ),
  null,
]
