import { Talent } from '../../Classes'

export default [
	new Talent(
		'Elemental Focus',
		'spell_shadow_manaburn',
		[
			'Gives you a 10% chance to enter a Clearcasting state after casting a Fire, Frost or Nature damage spell. The Clearcasting state reduces the mana cost of your next damage spells by 100%.',
		],
		1,
		[[]]
	),
	new Talent('Reverberation', 'spell_frost_frostward', ['Reduces the cooldown of your Shock spells by ', ' sec.'], 5, [
		[0.1, 0.2, 0.3, 0, 4, 0, 5],
	]),
	new Talent(
		'Call of Thunder',
		'spell_nature_callstorm',
		['Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ', '%.'],
		5,
		[[1, 2, 3, 4, 6]],
		[{ x: null, y: null }],
		[{ x: 3, y: 2 }],
		null,
		null,
		null,
		null,
		['D1']
	),
	null,
]
