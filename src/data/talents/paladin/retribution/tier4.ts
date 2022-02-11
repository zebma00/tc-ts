import { Talent } from '../../Classes'

const tier4 = [
	new Talent(
		'Crusade',
		'spell_holy_crusade',
		['Your damaging melee attacks have a ', '% chance to refresh all Judgements on the target.'],
		2,
		[[50, 100]],
		[
			{
				x: 2,
				y: 0,
			},
		],
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
	null,
	new Talent(
		'Eye for an Eye',
		'spell_holy_eyeforaneye',
		[
			'All spell criticals against you cause ',
			"% of the damage to be taken by the caster as well. The damage caused by Eye for an Eye will not exceed more than 50% of the Paladin's total health.",
		],
		2,
		[[25, 50]]
	),
	null,
]

export default tier4
