import { Talent } from '../../Classes'

export default [
	new Talent(
		'Frost Warding',
		'spell_frost_frostward',
		[
			'Increases your Fire resistance by ',
			' and gives your Fire Ward a ',
			'% chance to reflect Fire spells and effects while active.',
		],
		2,
		[
			[20, 40],
			[10, 20],
		]
	),
	new Talent(
		'Improved Frostbolt',
		'spell_frost_frostbolt02',
		['Reduces the cast time of your Frostbolt spell by ', ' sec.'],
		5,
		[[0.1, 0.2, 0.3, 0.4, 0.5]]
	),
	new Talent(
		'Elemental Precision',
		'spell_ice_magicdamage',
		['Reduces the chance that the opponent can resist your Frost and Fire spells by ', '%.'],
		3,
		[[2, 4, 6]]
	),
	null,
]
