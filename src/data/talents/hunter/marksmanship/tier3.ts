import { Talent } from '../../Classes'

export default [
	new Talent(
		'Aimed Shot',
		'inv_spear_07',
		['An aimed shot that increases range damage by 70.'],
		1,
		[[]],
		null,
		null,
		'75 Mana',
		'8 - 35 yd range',
		'3 sec cast',
		'6 sec cooldown'
	),
	new Talent(
		'Swift Shots',
		'ability_hunter_zenarchery',
		['Your Arcane Shot reduces the cooldown of your Rapid Fire by ', ' sec.'],
		2,
		[[1, 2]],
		[{ x: 1, y: 1 }],
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
		'Efficiency',
		'spell_frost_wizardmark',
		['Reduces the Mana cost of your Shots and Stings by ', '%.'],
		3,
		[[4, 7, 10]],
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
			isMoved: true,
		}
	),
	new Talent('Hawk Eye', 'ability_townwatch', ['Increases the range of your ranged weapons by ', ' yards.'], 3, [
		[2, 4, 6],
	]),
]
