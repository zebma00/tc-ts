import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier4 = [
  new Talent(
    'Divine Insight',
    'spell_holy_healingfocus',
    ['Increases the duration of your Judgement effects by ', ' sec. In addition, your Judgement has a ', '% chance to not consume your active seal.'],
    2,
    [
      [15, 30],
      [50, 100],
    ],
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
    'Illumination',
    'spell_holy_greaterheal',
    ['After getting a critical effect from your Flash of Light, Holy Light or Holy Shock heal spell, gives you a ', '% chance to gain mana equal to the base cost of the spell.'],
    5,
    [[20, 40, 60, 80, 100]],
    [{ x: null, y: null }],
    [{ x: 4, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent('Improved Blessing of Wisdom', 'spell_holy_sealofwisdom', ['Increases the effect of your Blessing of Wisdom spell by ', '%.'], 2, [[10, 20]]),
  null,
=======
export default [
	null,
	new Talent(
		'Illumination',
		'spell_holy_greaterheal',
		[
			'After getting a critical effect from your Flash of Light, Holy Light or Holy Shock heal spell, gives you a ',
			'% chance to gain mana equal to the base cost of the spell.',
		],
		5,
		[[20, 40, 60, 80, 100]],
		[{ x: null, y: null }],
		[{ x: 4, y: 1 }],
		null,
		null,
		null,
		null,
		['D1']
	),
	new Talent(
		'Improved Blessing of Wisdom',
		'spell_holy_sealofwisdom',
		['Increases the effect of your Blessing of Wisdom spell by ', '%.'],
		2,
		[[10, 20]]
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier4
