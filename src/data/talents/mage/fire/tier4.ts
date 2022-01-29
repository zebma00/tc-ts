import { Talent } from '../../Classes'

export default [
	new Talent(
		'Improved Scorch',
		'spell_fire_soulburn',
		[
			'Your Scorch spell has a ',
			'% chance to cause your target to be vulnerable to Fire damage. This vulnaribility increases Fire damage taken by the target by 3% and lasts 30 sec. Stacks  up to 5 times.',
		],
		3,
		[[33, 67, 100]]
	),
	new Talent(
		'Fire Warding',
		'spell_fire_firearmor',
		[
			'Increases your Fire resistance by ',
			' and gives your Fire Ward a ',
			'% chance to reflect Fire spells and effects while active.',
		],
		2,
		[
			[20, 40],
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
	null,
	new Talent(
		'Master of Elements',
		'spell_fire_masterofelements',
		['Your Fire and Frost spell criticals refund ', '% of their base mana cost.'],
		3,
		[[10, 20, 30]]
	),
]
