import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    'Improved Revive Pet',
    'ability_hunter_beastsoothe',
    ["Revive Pet's casting time is reduced by ", ' sec, mana cost is reduced by ', '%, and increases the health your pet returns with by an additional ', '%.'],
    2,
    [
      [3, 6],
      [20, 40],
      [15, 30],
    ]
  ),
  new Talent(
    'Improved Aspect of the Monkey',
    'ability_hunter_aspectofthemonkey',
    ['Aspect of the Monkey also increases your critical strike chance with melee attacks and abilities by ', '%.'],
    5,
    [[2, 4, 6, 8, 10]],
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
  new Talent(
    'Thick Hide',
    'inv_misc_pelt_bear_03',
    ['Increases the armor rating of your pets by ', '% and reduces area of effect damage taken by your pets by ', '%.'],
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
      isMoved: false,
    }
  ),
  null,
]

export default tier2
