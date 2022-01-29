import { Talent } from '../../Classes'

export default [
	new Talent('Piercing Ice', 'spell_frost_frostbolt', ['Increases the damage done by your Frost splls by ', '%.'], 3, [
		[2, 4, 6],
	]),
	new Talent(
		'Icy Veins',
		'spell_frost_coldhearted',
		[
			'Hastens your spellcasting, increasing spell casting speed by 20% and gives you 100% chance to avoid interruption caused by damage while casting. lasts 20 sec.',
		],
		1,
		[[]],
		null,
		null,
		'3% of base mana',
		null,
		'Instant',
		'3 min cooldown',
		null,
		{
			isNew: true,
			isChanged: false,
			isMoved: false,
		}
	),
	null,
	new Talent(
		'Improved Blizzard',
		'spell_frost_icestorm',
		['Increases the damage done by your Blizzard spell by ', '% and reduces the cast time by ', ' sec.'],
		2,
		[
			[10, 20],
			[1, 2],
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
]
