import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier5 = [
  null,
  new Talent(
    'Divine Favor',
    'spell_holy_heal',
    ['When activated, gives your next Flash of Light, Holy Light or Holy Shock spell a 100% critical effect chance.'],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    [{ x: 6, y: 1 }],
    '4% of base mana',
    null,
    'Instant',
    '2 min cooldown',
    ['D2']
  ),
  new Talent(
    "Light's Grace",
    'spell_holy_lightsgrace',
    ['Gives your Holy Light spell a ', '% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.'],
    3,
    [[33, 67, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
=======
export default [
<<<<<<< HEAD
	null,
	new Talent(
		'Divine Favor',
		'spell_holy_heal',
		['When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance.'],
		1,
		[[1]],
		[{ x: 3, y: 1 }],
		[{ x: 6, y: 1 }],
		'4% of base mana',
		null,
		'Instant',
		'2 min cooldown',
		['D2']
	),
	new Talent(
		"Light's Grace",
		'spell_holy_lightsgrace',
		[
			'Gives your Holy Light spell a ',
			'% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.',
		],
		3,
		[[33, 67, 100]],
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
=======
  null,
  new Talent(
    'Divine Favor',
    'spell_holy_heal',
    ['When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance.'],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    [{ x: 6, y: 1 }],
    '4% of base mana',
    null,
    'Instant',
    '2 min cooldown',
    ['D2']
  ),
  new Talent(
    'Lasting Judgement',
    'spell_holy_healingaura',
    ['Increases the effect of your Judgement of Wisdom and Judgement of Light by ', '% and increases the duration by ', ' sec.'],
    2,
    [
      [10, 20],
      [10, 20],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
>>>>>>> 8b33b65 (update talents + item class)
]

export default tier5
