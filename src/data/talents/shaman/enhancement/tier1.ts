import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier1 = [
	null,
	new Talent('Ancestral Knowledge', 'spell_shadow_grimward', ['Increases your maximum mana by ', '%.'], 5, [
		[1, 2, 3, 4, 5],
	]),
	new Talent(
		'Ancestral Endurance',
		'inv_shield_06',
		['Increases your chance to block attacks with a shield by ', '% and increases the amount blocked by ', '%.'],
		5,
		[
			[1, 2, 3, 4, 5],
			[5, 10, 15, 20, 15],
		]
=======
export default [
	null,
	new Talent(
		'Ancestral Knowledge',
		'spell_shadow_grimward',
		['Increases your intellect and spirit by ', '%.'],
		5,
		[[1, 2, 3, 4, 5]],
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
	new Talent(
		'Ancestral Endurance',
		'spell_nature_ancestralguardian',
		['Increases your stamina and strength by ', '%.'],
		5,
		[[1, 2, 3, 4, 5]],
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
>>>>>>> 1ddb4f1 (patch notes)
	),
	null,
]

export default tier1
