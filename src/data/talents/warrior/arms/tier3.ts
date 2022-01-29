import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier3 = [
  new Talent('Improved Overpower', 'inv_sword_05', ['Increases the critical strike chance of your Overpower by ', '%.'], 2, [[25, 50]]),
  new Talent('Anger Management', 'spell_holy_blessingofstamina', ['Generate 1 Rage per 3 seconds while in combat.'], 1, [[1]]),
  new Talent(
    'Deep Wounds',
    'ability_backstab',
    ['Your critical strikes cause the target to bleed, dealing ', "% of your melee weapon's average damage over 12 sec."],
    3,
    [[20, 40, 60]],
    [{ x: 0, y: 2 }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  null,
=======
export default [
	new Talent(
		'Improved Overpower',
		'inv_sword_05',
		['Increases the critical strike chance of your Overpower by ', '%.'],
		2,
		[[25, 50]]
	),
	new Talent(
		'Anger Management',
		'spell_holy_blessingofstamina',
		['Generates 1 rage per 3 seconds while in combat.'],
		1,
		[[1]],
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
		'Deep Wounds',
		'ability_backstab',
		[
			'Your critical strikes cause the target to bleed, dealing ',
			"% of your melee weapon's average damage over 12 sec.",
		],
		3,
		[[20, 40, 60]],
		[{ x: 0, y: 2 }],
		[{ x: 3, y: 2 }],
		null,
		null,
		null,
		null,
		['D1']
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier3
