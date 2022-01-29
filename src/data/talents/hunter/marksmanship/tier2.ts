import { Talent } from '../../Classes'

export default [
<<<<<<< HEAD
  null,
  new Talent(
    'Improved Arcane Shot',
    'ability_impalingbolt',
    ['Your auto shot hits reduce the cooldown of your Arcane Shot by ', ' sec.'],
    2,
    [[0.25, 0.5]],
    null,
    [{ x: 2, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1'],
    { isNew: false, isChanged: true, isMoved: true }
  ),
  new Talent('Mortal Shots', 'ability_piercedamage', ['Increases your ranged critical strike damage bonus by ', '%.'], 5, [[6, 12, 18, 24, 30]], [{ x: 0, y: 2 }], null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
  null,
=======
	null,
	new Talent(
		'Improved Concussive Shot',
		'spell_frost_stun',
		['Gives your Concussive Shot a ', '% chance to stun the target for 3 sec.'],
		5,
		[[4, 8, 12, 16, 20]],
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
		'Mortal Shots',
		'ability_piercedamage',
		['Increases your ranged critical strike damage bonus by ', '%.'],
		5,
		[[6, 12, 18, 24, 30]],
		[{ x: 0, y: 2 }],
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
>>>>>>> 1ddb4f1 (patch notes)
]
