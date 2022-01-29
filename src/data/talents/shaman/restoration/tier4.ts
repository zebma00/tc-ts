import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier4 = [
  new Talent(
    'Tidal Strikes',
    'spell_shaman_tidalwaves',
    ['Your melee and spell critical strikes have a ', '% chance to reduce the cast time of your next Chain Heal by 0.5 sec and reduce the mana cost by 20%. This effect stacks up to 5 times.'],
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
  new Talent(
    'Restorative Totems',
    'spell_nature_manaregentotem',
    ['Increases the effect of your Mana Spring and Healing Stream Totems by ', '%.'],
    3,
    [[10, 20, 30]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D3'],
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent('Tidal Mastery', 'spell_nature_tranquility', ['Increases the critical effect chance of your Healing and Lightning spells by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  null,
=======
export default [
	null,
	new Talent(
		'Restorative Totems',
		'spell_nature_manaregentotem',
		['Increases the effect of your Mana Spring and Healing Stream Totems by ', '%.'],
		3,
		[[10, 20, 30]],
		[{ x: null, y: null }],
		[{ x: 6, y: 1 }],
		null,
		null,
		null,
		null,
		['D3'],
		{
			isNew: false,
			isChanged: true,
			isMoved: false,
		}
	),
	new Talent(
		'Tidal Mastery',
		'spell_nature_tranquility',
		['Increases the critical effect chance of your Healing and Lightning spells by ', '%.'],
		5,
		[[1, 2, 3, 4, 5]]
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier4
