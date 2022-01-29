import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier4 = [
=======
export default [
>>>>>>> 1ddb4f1 (patch notes)
	new Talent(
		'Improved Kick',
		'ability_kick',
		['Gives your Kick ability a ', '% chance to silence the target for 2 sec.'],
		2,
		[[50, 100]]
	),
	new Talent(
<<<<<<< HEAD
		'Close Quarters Combat',
=======
		'Close Combat Specialization',
>>>>>>> 1ddb4f1 (patch notes)
		'inv_weapon_shortblade_05',
		['Increases your critical strike chance and critical strike damage with daggers and fist weapons by ', '%.'],
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
<<<<<<< HEAD
			isNew: true,
			isChanged: false,
			isMoved: false,
		}
	),
	new Talent(
		'Endurance',
		'spell_shadow_shadowward',
		['Reduces the cooldown of your Evasion and Sprint abilities by ', ' sec.'],
		2,
		[[45, 90]],
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{
			isNew: false,
			isChanged: false,
			isMoved: true,
		}
	),
	new Talent(
		'Throwing Weapon Specialization',
		'ability_throw',
		[
			'Increases your range with throwing weapons by ',
			' yards and grants your hits with throwing weapons a ',
			'% chance to add a combo point to the target.',
		],
		2,
		[
			[3, 6],
			[35, 70],
		],
=======
			isNew: false,
			isChanged: true,
			isMoved: false,
		}
	),
	new Talent(
		'Blade Twisting',
		'ability_rogue_bladetwisting',
		['Gives your Sinister Strike, Backstab and Hemorrhage abilities a ', '% chance to daze the target for 8 sec.'],
		2,
		[[10, 20]],
>>>>>>> 1ddb4f1 (patch notes)
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
<<<<<<< HEAD
=======
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier4
