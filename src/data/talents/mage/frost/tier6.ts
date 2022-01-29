import { Talent } from '../../Classes'

export default [
	null,
	null,
	new Talent(
		"Winter's Chill",
		'spell_frost_chillingblast',
		[
			'Gives your Frost spells a ',
			"% chance to apply the Winter's Chill effect, which increases the critical strike chance of Frost spells by 2% and critical strike damage from Frost spells against the target by 3%. This effect stacks up to 5 times.",
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
		{
			isNew: false,
			isChanged: true,
			isMoved: false,
		}
	),
	null,
]
