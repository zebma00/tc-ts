import { Talent } from '../../Classes'

export default [
	null,
	new Talent(
		'Blessing of Protection',
		'spell_nature_lightningshield',
		[
			'Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 10 for 5 min. In addition, when the target blocks a melee attack the attacker will take 14 Holy damage. Players may only have one Blessing on them per Paladin at any one time.',
		],
		1,
		[[]],
		[{ x: null, y: null }],
		[{ x: 6, y: 1 }],
		'60 Mana',
		'30 yd range',
		'Instant',
		null,
		['D2']
	),
	new Talent(
		'Reckoning',
		'spell_holy_blessingofstrength',
		[
			'Gives you a ',
			'% chance to gain an extra attack after blocking an attack or being the victim of a critical strike.',
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
