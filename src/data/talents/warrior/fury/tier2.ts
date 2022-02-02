import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier2 = [
	new Talent(
		'Improved Berserker Rage',
		'spell_nature_ancestralguardian',
		['Causes your Berserker Rage to generate ', ' rage when used.'],
		2,
		[[5, 10]],
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{ isNew: false, isChanged: false, isMoved: true }
	),
	new Talent(
		'Improved Demoralizing Shout',
		'ability_warrior_warcry',
		['Increases the melee attack power reduction of Demoralizing Shout by ', '%.'],
		5,
		[[18, 16, 24, 32, 40]]
	),
	new Talent(
		'Unbridled Wrath',
		'spell_nature_stoneclawtotem',
		['Gives you a ', '% chance to gain an additional Rage point when dealing damage with melee weapons.'],
		5,
		[[8, 16, 24, 32, 40]]
	),
	null,
=======
export default [
  new Talent(
    'Improved Slam',
    'ability_warrior_decisivestrike',
    ['Reduces the casting time of your Slam ability by ', ' sec.'],
    5,
    [[0.2, 0.4, 0.6, 0.8, 1]],
    [{ x: null, y: null }],
    [{ x: 2, y: 0 }],
    null,
    null,
    null,
    null,
    ['D1'],
    {
      isNew: false,
      isChanged: true,
      isMoved: true,
    }
  ),
  new Talent(
    'Improved Demoralizing Shout',
    'ability_warrior_warcry',
    ['Increases the melee attack power reduction of Demoralizing Shout by ', '%.'],
    5,
    [[12, 24, 36, 42, 60]],
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
    'Unbridled Wrath',
    'spell_nature_stoneclawtotem',
    ['Gives you a ', '% chance to gain an additional Rage point when dealing damage with melee weapons.'],
    5,
    [[8, 16, 24, 32, 40]]
  ),
  null,
>>>>>>> 8b33b65 (update talents + item class)
]

export default tier2
