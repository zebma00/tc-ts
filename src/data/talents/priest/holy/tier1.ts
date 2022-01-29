import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier1 = [
  new Talent(
    'Healing Focus',
    'spell_holy_healingfocus',
    ['Gives you a ', '% chance to avoid interruption caused by damage when casting any healing spell.'],
    2,
    [[35, 70]]
  ),
  new Talent('Improved Renew', 'spell_holy_renew', ['Increases the amount healed by your Renew spell by ', '%.'], 3, [[5, 10, 15]]),
  new Talent(
    'Holy Specialization',
    'spell_holy_sealofsalvation',
    ['Increases the critical effect chance of your Holy spells by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  null,
=======
export default [
	new Talent(
		'Healing Focus',
		'spell_holy_healingfocus',
		['Gives you a ', '% chance to avoid interruption caused by damage when casting any healing spell.'],
		2,
		[[35, 70]]
	),
	new Talent(
		'Spell Warding',
		'spell_holy_spellwarding',
		['Reduces all spell damage taken by ', '%.'],
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
			isChanged: false,
			isMoved: true,
		}
	),
	new Talent(
		'Holy Specialization',
		'spell_holy_sealofsalvation',
		['Increases the critical effect chance of your Holy spells by ', '%.'],
		5,
		[[1, 2, 3, 4, 5]]
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier1
