import { Talent } from '../../Classes'

export default [
	new Talent(
		'Ferocious Inspiration',
		'ability_hunter_ferociousinspiration',
		[
<<<<<<< HEAD
			'When your pet scores a critical hit, all party members have their damage increased by ',
			"% and all party members' pets and summons have their damage increased by ",
			'% for 10 sec.',
		],
		3,
		[
			[1, 2, 3],
			[5, 10, 15],
		],
=======
			'When your pet scores a Critical hit, all party member have their damage and healing increased by ',
			'% for 10 sec.',
		],
		3,
		[[1, 2, 3]],
>>>>>>> 1ddb4f1 (patch notes)
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
		'Intimidation',
		'ability_devour',
		[
			'Command your pet to intimidate the target on the next succesful melee attack, causing a high amount of threat and stunning the target for 3 sec.',
		],
		1,
		[[]],
		[{ x: null, y: null }],
		[{ x: 6, y: 1 }],
		'8% of base mana',
<<<<<<< HEAD
		'100 yd range',
=======
		'100yd range',
>>>>>>> 1ddb4f1 (patch notes)
		'Instant',
		'1 min cooldown',
		['D2']
	),
	null,
	new Talent(
		'Bestial Discipline',
		'spell_nature_abolishmagic',
		['Increases the Focus generation of your pets by ', '%.'],
		2,
		[[10, 20]]
	),
]
