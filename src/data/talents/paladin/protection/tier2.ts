import { Talent } from '../../Classes'

export default [
	new Talent(
		'Divine Purpose',
		'spell_holy_divinepurpose',
		['Increases the Holy damage you deal to enemies that are stunned or incapacitated by ', '%.'],
		3,
		[[10, 20, 30]],
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
		"Guardian's Favor",
		'spell_holy_sealofprotection',
		[
			'Reduces the cooldown of your Blessing of Protection by  ',
			' sec and increases the duration of your Blessing of Freedom by ',
			' sec.',
		],
		2,
		[
			[60, 120],
			[3, 6],
		]
	),
	null,
	new Talent(
		'Improved Devotion Aura',
		'spell_holy_devotionaura',
		['Increases the armor bonus of your Devotion Aura by ', '%.'],
		3,
		[[10, 20, 30]],
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
]
