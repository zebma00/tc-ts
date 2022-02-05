import { Talent } from '../../Classes'

export default [
  new Talent(
    'Melee Weapon Specialization',
    'inv_sword_05',
    ['Increases the damage you deal with melee attacks and abilities by ', '%.'],
    3,
    [[3, 6, 9]],
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
  new Talent(
    'Surefooted',
    'ability_kick',
    ['Increases hit chance by ', '% and increases the chance you resist movement impairing efects by ', '%.'],
    3,
    [
      [1, 2, 3],
      [5, 10, 15],
    ]
  ),
  null,
  new Talent(
    'Improved Feign Death',
    'ability_rogue_feigndeath',
    ['Reduces the cooldown of your Feign Death by ', ' sec and reduces the chance your Feign Death is resisted by ', '%.'],
    2,
    [
      [2, 4],
      [2, 4],
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
      isMoved: false,
    }
  ),
]
