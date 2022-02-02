import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier3 = [
  new Talent(
    'Vindication',
    'spell_holy_vindication',
    ["Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by ", '% for 10 sec.'],
    3,
    [[5, 10, 15]],
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
    'Conviction',
    'spell_holy_retributionaura',
    ['Increases your chance to get a critical strike with Melee weapons by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }],
    null,
    null,
    null,
    null,
    ['D3']
  ),
  new Talent(
    'Sanctity Aura',
    'spell_holy_mindvision',
    ['Increases Holy damage done by party members within 30 yards by 10%. Only one Aura can be active per paladin at a time.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant',
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  new Talent(
    'Pursuit of Justice',
    'spell_holy_persuitofjustice',
    ['Increases movement speed and mounted movement speed by ', '%. Does not stack with other movement increasing effects.'],
    2,
    [[4, 8]]
  ),
=======
export default [
<<<<<<< HEAD
	new Talent(
		'Pursuit of Justice',
		'spell_holy_persuitofjustice',
		[
			'Increases movement speed and mounted movement speed by ',
			'%. Does not stack with other movement increasing effects.',
		],
		2,
		[[4, 8]]
	),
	new Talent(
		'Conviction',
		'spell_holy_retributionaura',
		['Increases your chance to get a critical strike with Melee weapons by ', '%.'],
		5,
		[[1, 2, 3]],
		[{ x: null, y: null }],
		[{ x: 5, y: 1 }],
		null,
		null,
		null,
		null,
		['D3']
	),
	new Talent(
		'Sanctity Aura',
		'spell_holy_mindvision',
		[
			'Increases Holy damage done by party members within 30 yards by 10%. Only one Aura can be active per paladin at a time.',
		],
		1,
		[[]],
		null,
		null,
		null,
		null,
		'Instant',
		null,
		null,
		{
			isNew: false,
			isChanged: false,
			isMoved: true,
		}
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
=======
  new Talent(
    'Eye for an Eye',
    'spell_holy_eyeforaneye',
    [
      'All spell criticals against you cause ',
      "% of the damage to be taken by the caster as well. The damage caused by Eye for an Eye will not exceed more than 50% of the Paladin's total health.",
    ],
    2,
    [[25, 50]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  new Talent(
    'Conviction',
    'spell_holy_retributionaura',
    ['Increases your chance to get a critical strike with Melee weapons by ', '%.'],
    5,
    [[1, 2, 3]],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }],
    null,
    null,
    null,
    null,
    ['D3']
  ),
  new Talent(
    'Sanctity Aura',
    'spell_holy_mindvision',
    ['Increases Holy damage done by party members within 30 yards by 10%. Only one Aura can be active per paladin at a time.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant',
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  new Talent(
    'Pursuit of Justice',
    'spell_holy_persuitofjustice',
    ['Increases movement speed and mounted movement speed by ', '%. Does not stack with other movement increasing effects.'],
    2,
    [[4, 8]]
  ),
>>>>>>> 8b33b65 (update talents + item class)
]

export default tier3
