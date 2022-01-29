import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier2 = [
  new Talent(
    'Surge of Light',
    'spell_holy_surgeoflight',
    ['Your offensive spell criticals have a ', '% chance to heal a nearby party member with low health by 50% of the damage dealt.'],
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
  new Talent('Spell Warding', 'spell_holy_spellwarding', ['Reduces all spell damage taken by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent(
    'Divine Fury',
    'spell_holy_sealofwrath',
    ['Reduces the casting time of your Heal, Greater Heal, Smite and Holy Fire spells by ', ' sec.'],
    5,
    [[0.1, 0.2, 0.3, 0.4, 0.5]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
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
		'Spiritual Guidance',
		'spell_holy_spiritualguidence',
		['Increases healing and spell damage by ', '% of your total Spirit.'],
		5,
		[[3, 6, 9, 12, 15]],
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
		'Improved Renew',
		'spell_holy_renew',
		['Increases the amount healed by your Renew spell by ', '%.'],
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
			isChanged: false,
			isMoved: true,
		}
	),
	new Talent(
		'Divine Fury',
		'spell_holy_sealofwrath',
		['Reduces the casting time of your Heal, Greater Heal, Smite and Holy Fire spells by ', '%.'],
		5,
		[[0.1, 0.2, 0.3, 0.4, 0.5]],
		[{ x: null, y: null }],
		[{ x: 2, y: 2 }],
		null,
		null,
		null,
		null,
		['D1']
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier2
