import { Talent } from '../../Classes'

export default [
	null,
	new Talent(
		'Seal Fate',
		'spell_shadow_chilltouch',
		[
			'Your critical strikes from abilities that add combo points have a ',
			'% chance to add an additional combo point.',
		],
		5,
		[[20, 40, 60, 80, 100]],
		[{ x: 4, y: 1 }]
	),
	null,
	null,
]
