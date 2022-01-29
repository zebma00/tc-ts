import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier3 = [
=======
export default [
>>>>>>> 1ddb4f1 (patch notes)
	new Talent(
		'Enhancing Totems',
		'spell_nature_earthbindtotem',
		['Increases the effect of your Grace of Air and Strength of Earth Totems by ', '%'],
		2,
		[[8, 15]]
	),
	null,
	new Talent(
		'Two-Handed Axes and Maces',
		'inv_axe_10',
		['Allows you to use Two-Handed Axes and Two-Handed Maces.'],
		1,
		[[]]
	),
	new Talent(
<<<<<<< HEAD
		'Anticipation',
		'spell_nature_mirrorimage',
		['Increases your chance to dodge by an additional ', '%.'],
		3,
		[[2, 4, 6]],
=======
		'Empowered Elemental Shields',
		'spell_nature_elementalshields',
		['Your attacks have a ', '% chance to expend a Lightning or Water Shield orb.'],
		2,
		[[15, 30]],
>>>>>>> 1ddb4f1 (patch notes)
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{
<<<<<<< HEAD
			isNew: false,
			isChanged: true,
=======
			isNew: true,
			isChanged: false,
>>>>>>> 1ddb4f1 (patch notes)
			isMoved: false,
		}
	),
]

export default tier3
