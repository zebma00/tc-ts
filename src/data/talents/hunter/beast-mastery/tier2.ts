import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Spirit Bond', 'classic_ability_druid_demoralizingroar', ['Increases the physical damage you and your pets deal by ', '% while within 10 yards of each other.'], 2, [[2, 4]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
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
    'Caretaker',
    'ability_hunter_mendpet',
    [
      'Gives your Mend Pet spell a ',
      "% chance to remove 1 poison, disease, curse of magic effect from your pet each tick. In addition, Revive Pet's casting time is reduced by ",
      ' sec, mana cost is reduced by ',
      '%, and increases the health your pet returns with by an additional ',
      '%.',
    ],
    2,
    [
      [15, 30],
      [3, 6],
      [20, 40],
      [15, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
]

export default tier2
