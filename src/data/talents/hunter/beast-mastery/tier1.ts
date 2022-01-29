import { Talent } from '../../Classes'

export default [
<<<<<<< HEAD
  null,
  new Talent(
    'Improved Aspect of the Hawk',
    'spell_nature_ravenform',
    ['While Aspect of the Hawk is active, all normal ranged attacks have a ', '% chance to increase your ranged attack speed by 30% for 12 sec.'],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  new Talent(
    'Improved Aspect of the Monkey',
    'ability_hunter_aspectofthemonkey',
    ['While Aspect of the Money is active, all normal melee attacks have a ', '% chance to increase your critical strike chance with melee attacks by 20% for 8 sec.'],
    5,
    [[2, 4, 6, 8, 10]],
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
      isMoved: true,
    }
  ),
  null,
=======
	null,
	new Talent(
		'Improved Aspect of the Hawk',
		'spell_nature_ravenform',
		[
			'While Aspect of the Hawk is active, all normal ranged attacks have a ',
			'% chance to increase your ranged attack speed by 15% for 12 sec.',
		],
		5,
		[[2, 4, 6, 8, 10]],
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
		'Improved Aspect of the Monkey',
		'ability_hunter_aspectofthemonkey',
		['Aspect of the Monkey also increases your critical strike chance with melee attacks and abilities by ', '%.'],
		5,
		[[2, 4, 6, 8, 10]],
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
			isMoved: true,
		}
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]
