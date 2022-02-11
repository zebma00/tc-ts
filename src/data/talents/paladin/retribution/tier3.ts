import { Talent } from '../../Classes'

const tier3 = [
	new Talent(
		'Vindication',
		'spell_holy_vindication',
		["Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by ", '% for 10 sec.'],
		3,
		[[5, 10, 15]],
		null,
		[{ x: 3, y: 0 }],
		null,
		null,
		null,
		null,
		['D1'],
		{
			isNew: false,
			isChanged: true,
			isMoved: false,
		}
	),
	new Talent(
		'Conviction',
		'spell_holy_retributionaura',
		['Increases your chance to get a critical strike with Melee weapons by ', '%.'],
		5,
		[[1, 2, 3]],
		[{ x: null, y: null }],
		[{ x: 5, y: 1 }],
		null,
		null,
		null,
		null,
		['D3']
	),
	new Talent(
		'Sanctity Aura',
		'spell_holy_mindvision',
		[
			'Increases Holy damage done by party members within 30 yards by 10%. Only one Aura can be active per paladin at a time.',
		],
		1,
		[[]],
		null,
		null,
		null,
		null,
		'Instant',
		null,
		null,
		{
			isNew: false,
			isChanged: false,
			isMoved: true,
		}
	),
	new Talent(
		'Pursuit of Justice',
		'spell_holy_persuitofjustice',
		[
			'Increases movement speed and mounted movement speed by ',
			'%. Does not stack with other movement increasing effects.',
		],
		2,
		[[4, 8]]
	),
]

export default tier3
