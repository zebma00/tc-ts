import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier2 = [
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
  null,
=======
export default [
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
		['Increases the health of your pets by ', '%.'],
		3,
		[[5, 10, 15]],
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
		'Unleashed Fury',
		'ability_bullrush',
		['Increases the damage done by your pets by ', '%.'],
		5,
		[[4, 8, 12, 16, 20]],
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{
			isNew: false,
			isChanged: false,
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
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier2
