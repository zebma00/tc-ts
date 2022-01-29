import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier2 = [
  null,
  new Talent(
    'Spiritual Focus',
    'spell_arcane_blink',
    ['Gives your Flash or Light and Holy Light spells a ', '% chance to not lose casting time when you take damage.'],
    5,
    [[14, 28, 42, 56, 70]]
  ),
  new Talent(
    'Improved Seal of Righteousness',
    'ability_thunderbolt',
    ['Increases the damage done by your Seal of Righteousness and Judgement of Righeousness by ', '%.'],
    5,
    [[3, 6, 9, 12, 15]]
  ),
  null,
=======
export default [
	new Talent(
		'Healing Light',
		'spell_holy_holybolt',
		['Increases the amount healed by your Flash or Light and Holy Light spells by ', '%.'],
		3,
		[[4, 8, 12]],
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
		'Spiritual Focus',
		'spell_arcane_blink',
		['Gives your Flash or Light and Holy Light spells a ', '% chance to not lose casting time when you take damage.'],
		3,
		[[23, 47, 70]],
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
		'Improved Seal of Righteousness',
		'ability_thunderbolt',
		['Increases the damage done by your Seal of Righteousness and Judgement of Righeousness by ', '%.'],
		5,
		[[3, 6, 9, 12, 15]]
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier2
