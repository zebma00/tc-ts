import { Talent } from '../../Classes'

export default [
<<<<<<< HEAD
  new Talent(
    'Pathfinding',
    'ability_mount_jungletiger',
    ['Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ', '%'],
    2,
    [[3, 6]]
  ),
  new Talent('Bestial Swiftness', 'ability_druid_dash', ['Increases the outdoor movement speed of your pets by 30%.'], 1, [[]]),
  new Talent('Unleashed Fury', 'ability_bullrush', ['Increases the damage done by your pets by ', '%.'], 5, [[4, 8, 12, 16, 20]]),
  null,
=======
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
		'Bestial Recuperation',
		'ability_hunter_catlikereflexes',
		[
			'Damage that would otherwise kill your pet will instead reduce it to 35% of its total health. This effect has a 1 minute cooldown.',
		],
		1,
		[[]],
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
	null,
>>>>>>> 1ddb4f1 (patch notes)
]
