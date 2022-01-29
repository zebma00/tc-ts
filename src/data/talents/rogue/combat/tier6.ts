import { Talent } from '../../Classes'

export default [
	null,
	new Talent(
		'Weapon Expertise',
		'spell_holy_blessingofstrength',
		['Increases your skill with Swords, Daggers and Fist Weapons by ', '.'],
		2,
		[[2, 5]],
		[{ x: 4, y: 1 }]
	),
	new Talent(
		'Aggression',
		'ability_racial_avatar',
		['Increases the damage of your Sinister strike and Eviscerate abilites by ', '%.'],
		3,
		[[2, 4, 6]]
	),
	null,
]
