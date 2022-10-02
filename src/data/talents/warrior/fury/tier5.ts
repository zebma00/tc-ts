import { Talent } from '../../Classes'

const tier5 = [
	new Talent(
		'Improved Intercept',
		'ability_rogue_sprint',
		[
			'Reduces the cost of your Intercept by ',
			' rage points. In addition, gives you a ',
			'% chance to reset the cooldown Intercept after killing a target that yields experience or honor.',
		],
		2,
		[
			[5, 10],
			[50, 100],
		],
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{ isNew: false, isChanged: true, isMoved: false }
	),
	new Talent(
		'Death Wish',
		'spell_shadow_deathpact',
		[
			'When activated, increases your damage done by 20% and makes you immune to fear effects, but reduces your armor and resistances by 20% for 30 sec.',
		],
		1,
		[[]],
		[{ x: null, y: null }],
		[{ x: 6, y: 1 }],
		'10 Rage',
		null,
		'Instant cast',
		'3 min cooldown',
		['D2']
	),
	null,
	new Talent(
		'Crushing Blows',
		'ability_warrior_devastate',
		['Your Slam increases the damage of your next Slam within 5 sec by ', '%.'],
		2,
		[[10, 20]],
		[{ x: 3, y: 3 }],
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

export default tier5
