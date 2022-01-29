import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier3 = [
  new Talent(
    'Elemental Focus',
    'spell_shadow_manaburn',
    ['After landing a critical strike with a Fire, Frost or Nature damage spell, you enter a Clearcasting state. The Clearcasting state reduces the mana cost of your next 2 damage spells by 40%.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Reverberation', 'spell_frost_frostward', ['Reduces the cooldown of your Shock spells by ', ' sec.'], 5, [[0.2, 0.4, 0.6, 0.8, 1]]),
  new Talent(
    'Call of Thunder',
    'spell_nature_callstorm',
    ['Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ', '%.'],
    3,
    [[2, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ['D3'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
=======
export default [
	new Talent(
		'Elemental Focus',
		'spell_shadow_manaburn',
		[
			'Gives you a 10% chance to enter a Clearcasting state after casting a Fire, Frost or Nature damage spell. The Clearcasting state reduces the mana cost of your next damage spells by 100%.',
		],
		1,
		[[]]
	),
	new Talent('Reverberation', 'spell_frost_frostward', ['Reduces the cooldown of your Shock spells by ', ' sec.'], 5, [
		[0.1, 0.2, 0.3, 0, 4, 0, 5],
	]),
	new Talent(
		'Call of Thunder',
		'spell_nature_callstorm',
		['Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ', '%.'],
		5,
		[[1, 2, 3, 4, 6]],
		[{ x: null, y: null }],
		[{ x: 3, y: 2 }],
		null,
		null,
		null,
		null,
		['D1']
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier3
