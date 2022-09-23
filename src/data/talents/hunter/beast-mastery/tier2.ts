import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    'Improved Eyea of the Beast',
    'ability_eyeoftheowl',
    ['Increases the duration of your Eyes of the Beast by ', ' sec. In addition, while Eyes of the Beast is active, your pet deals ', '% additional damage and generates ', ' additional focus.'],
    2,
    [
      [30, 60],
      [5, 10],
      [10, 20],
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
  new Talent('Endurance Training', 'spell_nature_reincarnation', ['Increases the health of your pets by ', '%.'], 5, [[3, 6, 9, 12, 15]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
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
  new Talent(
    'Spirit Bond',
    'classic_ability_druid_demoralizingroar',
    ['Increases the physical damage you and your pets deal by ', '% while within 10 yards of each other.'],
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
]

export default tier2
