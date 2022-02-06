import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    'Spirit Bond',
    'classic_ability_druid_demoralizingroar',
    ['Increases the damage you and your pet deal by ', '% while within 10 yards of each other.'],
    2,
    [[2, 4]],
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
    'Endurance Training',
    'spell_nature_reincarnation',
    ['Increases the health of your pets by ', '% and your total health by ', '%.'],
    3,
    [
      [5, 10, 15],
      [1, 2, 3],
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
    'Improved Revive Pet',
    'ability_hunter_beastsoothe',
    [
      "Revive Pet's casting time is reduced by ",
      ' sec, mana cost is reduced by ',
      '%, and increases the health your pet returns with by an additional ',
      '%.',
    ],
    2,
    [
      [3, 6],
      [20, 40],
      [15, 30],
    ]
  ),
]

export default tier2
