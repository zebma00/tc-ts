import { Talent } from '../../Classes'

export default [
  new Talent(
    'Pathfinding',
    'ability_mount_jungletiger',
    ['Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ', '%'],
    2,
    [[3, 6]]
  ),
  new Talent('Bestial Swiftness', 'ability_druid_dash', ['Increases the outdoor movement speed of your pets by 30%.'], 1, [[]]),
  new Talent(
    'Thick Hide',
    'inv_misc_pelt_bear_03',
    ['Increases the armor rating of your pets by ', '% and reduces area of effect damage taken by your pet by ', '%.'],
    3,
    [
      [10, 20, 30],
      [20, 40, 60],
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
      isMoved: true,
    }
  ),
  new Talent(
    'Aspect Mastery',
    'spell_holy_blessingofagility',
    ['Increases the effect of your Aspects by ', '%.'],
    2,
    [[10, 20]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]
