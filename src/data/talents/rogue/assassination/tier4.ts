import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier4 = [
  new Talent(
    'Envenom',
    'ability_creature_poison_06',
    ['Your Eviscerate and Rupture attempt to consume one stack of your Deadly Poison per combo point, increasing the damage by ', '% per consumed stack.'],
    2,
    [[3, 6]],
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
    'Vile Poisons',
    'ability_rogue_feigndeath',
    ['Increases the damage dealt by your poisons by ', '% and gives your poisons an additional ', '% increased chance to resist dispel effects.'],
    5,
    [
      [4, 8, 12, 16, 20],
      [8, 16, 24, 32, 40],
    ]
  ),
  new Talent('Improved Poisons', 'ability_poisons', ['Increases the chance to apply poisons to your target by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
=======
export default [
	null,
	new Talent(
		'Vile Poisons',
		'ability_rogue_feigndeath',
		[
			'Increases the damage dealt by your poisons by ',
			'% and gives your poisons an additional ',
			'% increased chance to resist dispel effects.',
		],
		3,
		[
			[7, 14, 20],
			[13, 27, 40],
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
	new Talent(
		'Improved Poisons',
		'ability_poisons',
		['Increases the chance to apply poisons with your off-hand weapon  by ', '%.'],
		3,
		[[10, 20, 30]],
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
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier4
