import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Tidal Strikes',
    'spell_nature_unrelentingstorm',
    ['Your melee and spell critical strikes reduce the cast time of your next Chain Heal or Chain Lightning by ', ' sec and reduce the mana cost by ', '%. This effect stacks up to 5 times.'],
    2,
    [
      [0.25, 0.5],
      [5, 10],
    ],
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
]

export default tier4
