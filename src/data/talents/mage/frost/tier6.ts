import { Talent } from '../../Classes'

const tier6 = [
	null,
	null,
	new Talent(
		"Winter's Chill",
		'spell_frost_chillingblast',
		[
			'Gives your Frost spells a ',
			"% chance to apply the Winter's Chill effect, which increases the critical strike chance of Frost spells by 2% and critical strike damage of Frost spells by 4%. This effect stacks up to 5 times.",
		],
		5,
		[[20, 40, 60, 80, 100]],
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{ isNew: false, isChanged: true, isMoved: false }
	),
	null,
]

export default tier6
