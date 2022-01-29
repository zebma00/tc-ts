import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier6 = [
  new Talent(
    'Blood Frenzy',
    'ability_warrior_bloodfrenzy',
    ['Your Rend and Deep Wounds abilities also increase all physical damage caused to that target by ', '%.'],
    2,
    [[2, 4]],
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
  new Talent('Improved Hamstring', 'ability_shockwave', ['Gives your Hamstring a ', '% chance to immobilize the target for 5 sec.'], 3, [
    [10, 20, 30],
  ]),
  null,
=======
export default [
	new Talent(
		'Blood Frenzy',
		'ability_warrior_bloodfrenzy',
		['Your Rend and Deep Wounds abilities also increase all physical damage caused to that target by ', '%.'],
		2,
		[[2, 4]],
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
	new Talent(
		'Weapon Mastery',
		'ability_warrior_weaponmastery',
		[
			'Increases your weapon skill by ',
			' and reduces the duration of all Disarm effect used against you by ',
			'%. This does not stack with other Disarm duration reducing effects.',
		],
		2,
		[
			[3, 5],
			[25, 50],
		],
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
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier6
