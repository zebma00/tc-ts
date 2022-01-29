import { Talent } from '../../Classes'

export default [
	new Talent(
		'Improved Shred',
		'spell_shadow_vampiricaura',
		['Reduces the Energy cost of your Shred ability by ', '.'],
		2,
		[[6, 12]]
	),
	new Talent(
		'Predatory Strikes',
		'ability_hunter_pet_cat',
		['Increases your melee attack power while in Cat, Bear or Dire Bear form by ', '% of your level.'],
		3,
		[
			[50, 100, 150],
			[20, 40, 60],
		],
		[{ x: null, y: null }],
		[{ x: 5, y: 1 }],
		null,
		null,
		null,
		null,
		['D2']
	),
	new Talent(
		'Feline Frenzy',
		'ability_ghoulfrenzy',
		[
			'Your critical strikes from Cat Form abilities that add combo points have a ',
			'% chance to add an additional combo point.',
		],
		2,
		[[50, 100]],
		[{ x: 2, y: 2 }]
	),
	new Talent(
		'Primal Fury',
		'ability_racial_cannibalize',
		[
			'Gives you a ',
			'% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear or Dire Bear Form',
		],
		2,
		[[50, 100]],
		[{ x: 2, y: 2 }]
	),
]
