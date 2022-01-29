import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier6 = [
  null,
  new Talent(
    'Vengeance',
    'ability_racial_avatar',
    ['Gives you a ', '% bonus to your physical and Holy damage and healing for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.'],
    3,
    [[10, 20, 30]],
    [{ x: 2, y: 1 }],
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
    'Crusade',
    'spell_holy_blessedresillience',
    ['Your Judgement of any seal has a ', '% chance to apply Judgement of the Crusader in addition to its usual effect.'],
    2,
    [[50, 100]],
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
  null,
=======
export default [
	null,
	new Talent(
		'Vengeance',
		'ability_racial_avatar',
		[
			'Gives you a ',
			'% bonus to your physical and Holy damage after dealing a critical strike from a weapon swing, spell, or ability. This effect stacks up to 3 times. Lasts 15 sec.',
		],
		5,
		[[2, 4, 6, 8, 10]],
		[{ x: 2, y: 1 }],
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
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier6
