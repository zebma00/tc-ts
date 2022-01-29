import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier2 = [
  new Talent(
    'Improved Reincarnation',
    'spell_nature_reincarnation',
    ['Reduces the cooldown of your reincarnation spell by ', ' min and increases the amount of health and mana you reincarnate with by an additional ', '%.'],
    2,
    [
      [10, 20],
      [10, 20],
    ]
  ),
  new Talent('Ancestral Healing', 'spell_nature_undyingstrength', ['Increases your targets armor value by ', '% for 15 sec after getting a critical effect from one of your healing spells.'], 3, [
    [8, 16, 25],
  ]),
  new Talent('Totemic Focus', 'spell_nature_moonglow', ['Reduces the mana cost of your totems by ', '%.'], 5, [[5, 10, 15, 20, 25]]),
  new Talent('Spiritual Blessing', 'spell_nature_natureblessing', ['Increases your healing received by ', '%.'], 2, [[5, 10]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
=======
export default [
	new Talent(
		'Spiritual Warding',
		'spell_nature_spiritarmor',
		['Reduces the damage taken from Frost, Fire and Nature spells and effects by ', '%.'],
		3,
		[[4, 7, 10]],
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
		'Ancestral Healing',
		'spell_nature_undyingstrength',
		[
			'Increases your targets armor value by ',
			'% for 15 sec after getting a critical effect from one of your healing spells. Increases your armor value by ',
			'% after receiving a critical heal.',
		],
		3,
		[
			[8, 16, 25],
			[8, 16, 25],
		],
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
		'Tidal Focus',
		'spell_frost_manarecharge',
		['Reduces the Mana cost of your healing spells by ', '%.'],
		5,
		[[1, 2, 3, 4, 5]],
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
		"Nature's Guardian",
		'spell_nature_natureguardian',
		[
			'Whenever a damaging attack is taken that reduces you below 30% health, you have a ',
			'% chance to heal 10% of your total health. 5 second cooldown.',
		],
		5,
		[[10, 20, 30, 40, 50]],
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
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier2
