import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier4 = [
  new Talent(
<<<<<<< HEAD
    'Eye for an Eye',
    'spell_holy_eyeforaneye',
    ['All spell criticals against you cause ', "% of the damage to be taken by the caster as well. The damage caused by Eye for an Eye will not exceed more than 50% of the Paladin's total health."],
    2,
    [[25, 50]]
  ),
  null,
  new Talent('Improved Retribution Aura', 'spell_holy_auraoflight', ['Increases the damage done by your Retribution Arua by ', '%.'], 2, [[25, 50]]),
  null,
=======
export default [
	new Talent(
		'Vindication',
		'spell_holy_vindication',
		["Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by ", '% for 10 sec.'],
		2,
		[[15, 30]],
		null,
		[{ x: 4, y: 0 }],
		null,
		null,
		null,
		null,
		['D1'],
		{
			isNew: false,
			isChanged: true,
			isMoved: true,
		}
	),
	null,
	new Talent(
		'Eye for an Eye',
		'spell_holy_eyeforaneye',
		[
			'All spell criticals against you cause ',
			"% of the damage to be taken by the caster as well. The damage caused by Eye for an Eye will not exceed more than 50% of the Paladin's total health.",
		],
		2,
		[[25, 50]]
	),
	new Talent(
		'Two-Handed Weapon Specialization',
		'inv_hammer_04',
		['Increases the damage you deal with two-handed melee weapons by ', '%.'],
		3,
		[[3, 6, 9]],
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
>>>>>>> 1ddb4f1 (patch notes)
=======
    'Two-Handed Weapon Specialization',
    'inv_hammer_04',
    ['Increases the damage you deal with two-handed melee weapons by ', '%.'],
    3,
    [[2, 4, 6]],
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
  null,
>>>>>>> 8b33b65 (update talents + item class)
]

export default tier4
