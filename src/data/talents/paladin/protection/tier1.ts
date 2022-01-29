import { Talent } from '../../Classes'

export default [
	new Talent(
		'Holy Guidance',
		'ability_rogue_ambush',
		['Increases your chance to hit with melee attacks and spells by ', '%.'],
		3,
		[[1, 2, 3]],
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
		'Spiritual Attunement',
		'spell_holy_revivechampion',
		['When you are healed, you gain mana equal to ', '% of the amount healed.'],
		5,
		[[2, 4, 6, 8, 10]],
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
		'Redoubt',
		'ability_defend',
		['Increases your chance to block by ', '% after being the victim of a critical strike. Lasts 10 sec or 5 blocks.'],
		5,
		[[6, 12, 18, 24, 30]],
		[{ x: null, y: null }],
		[{ x: 2, y: 2 }],
		null,
		null,
		null,
		null,
		['D2']
	),
	null,
]
