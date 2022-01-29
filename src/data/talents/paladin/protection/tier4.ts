import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier4 = [
  new Talent(
    'Spiritual Attunement',
    'spell_holy_revivechampion',
    ['When you are healed by a friendly target, you gain mana equal to ', '% of the amount healed.'],
    2,
    [[5, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    'Improved Hammer of Justice',
    'spell_holy_sealofmight',
    ['Reduces the cooldown of your Hammer of Justice spell by ', ' sec.'],
    3,
    [[5, 10, 15]]
  ),
  new Talent(
    'Improved Concentration Aura',
    'spell_holy_mindsooth',
    [
      'Increases the effect of you Concentration Aura by an additional ',
      '% and gives all group members effected by the aura an additional ',
      '% chance to resist silence and interrupt effects.',
    ],
    3,
    [
      [5, 10, 15],
      [5, 10, 15],
    ]
  ),
  null,
=======
export default [
	null,
	new Talent(
		'Improved Hammer of Justice',
		'spell_holy_sealofmight',
		['Reduces the cooldown of your Hammer of Justice spell by ', ' sec.'],
		3,
		[[5, 10, 15]]
	),
	new Talent(
		'Improved Concentration Aura',
		'spell_holy_mindsooth',
		[
			'Increases the effect of you Concentration Aura by an additional ',
			'% and gives all group members effected by the aura an additional ',
			'% chance to resist silence and interrupt effects.',
		],
		3,
		[
			[5, 10, 15],
			[5, 10, 15],
		]
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier4
