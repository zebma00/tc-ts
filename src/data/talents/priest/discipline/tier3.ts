import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier3 = [
  null,
  new Talent(
    'Inner Focus',
    'spell_frost_windwalkon',
    ['When activated, reduces the mana cost of your next spell by 100% and increases its critical strike chance by 25%.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant',
    '3 min cooldown'
  ),
  new Talent(
    'Meditation',
    'spell_nature_sleep',
    ['Allows ', '% of your mana regeneration to continue while casting.'],
    3,
    [[5, 10, 15]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
=======
export default [
	null,
	new Talent(
		'Inner Focus',
		'spell_frost_windwalkon',
		[
			'When activated, reduces the mana cost of your next spell by 100% and increases its critical strike chance by 25%.',
		],
		1,
		[[]],
		null,
		null,
		null,
		null,
		'Instant',
		'3 min cooldown'
	),
	new Talent(
		'Meditation',
		'spell_nature_sleep',
		['Allows ', '% of your mana regeneration to continue while casting.'],
		3,
		[[10, 20, 30]],
		[{ x: null, y: null }],
		[{ x: 4, y: 2 }],
		null,
		null,
		null,
		null,
		['D2'],
		{
			isNew: false,
			isChanged: true,
			isMoved: false,
		}
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier3
