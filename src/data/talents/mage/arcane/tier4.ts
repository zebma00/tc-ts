import { Talent } from '../../Classes'

export default [
	new Talent(
		'Improved Dampen Magic',
		'spell_nature_abolishmagic',
		['Increases your chance to resist spells by ', '% while Dampen Magic is active.'],
		2,
		[[2, 4]],
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
	new Talent(
		'Improved Counterspell',
		'spell_frost_iceshock',
		['Gives your counterspell a ', ' chance to silence the target for 4 sec.'],
		2,
		[[50, 100]]
	),
	null,
	new Talent(
		'Arcane Meditation',
		'spell_shadow_siphonmana',
		['Allows ', ' % of your Mana regeneration to continue while casting.'],
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
			isMoved: false,
		}
	),
]
