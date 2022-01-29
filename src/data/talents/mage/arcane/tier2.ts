import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier2 = [
  new Talent(
    'Wand Specialization',
    'inv_wand_01',
    ['When you deal damage with your wand, you have ', ' chance to return 20% of the damage dealt as mana to you.'],
    2,
    [['a', 'an increased']],
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
    'Magic Absorbtion',
    'spell_nature_astralrecalgroup',
    ['Increases all resistances by ', ' and causes you to restore ', '% mana after fully resisting or fully absorbing spell damage. 8 sec cooldown.'],
    2,
    [
      [5, 10],
      [2, 4],
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
    'Arcane Concentration',
    'spell_shadow_manaburn',
    ['Gives you a ', '% chance of entering a clearcasting state after any damage spell hits a target. The clearcasting state reduces the mana cost of your next damage spell by 100%.'],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  new Talent(
    'Wizardry',
    'ability_mage_potentspirit',
    [
      'Your Arcane Missiles, Fireball, Frostbolt and Scorch increase the damage done by your Arcane Missiles, Fireball, Frostbolt and Scorch by ',
      '% for 30 sec. This effect stacks up to 5 times. This effect is lost when casting the same spell consecutively.',
    ],
    2,
    [[2, 4]],
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
=======
export default [
	new Talent('Wand Specialization', 'inv_wand_01', ['Increases the damage you deal with wands by ', '%.'], 2, [
		[13, 25],
	]),
	new Talent(
		'Arcane Resilience',
		'spell_arcane_arcaneresilience',
		[
			'Decreases the mana lost per point of damage when Mana Shield is active by ',
			'% and increases your armor by ',
			'% of your intellect.',
		],
		2,
		[
			[10, 20],
			[25, 50],
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
			isMoved: true,
		}
	),
	new Talent(
		'Arcane Concentration',
		'spell_shadow_manaburn',
		[
			'Gives you a ',
			' chance of entering a clearcasting state after any damage spell hits a target. The clearcasting state reduces the mana cost of your next damage spell by 100%.',
		],
		5,
		[[2, 4, 6, 8, 10]]
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier2
