import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Improved Reincarnation',
    'spell_nature_reincarnation',
    ['Reduces the cooldown of your reincarnation spell by ', ' min and increases the amount of health and mana you reincarnate with by an additional ', '%.'],
    2,
    [
      [15, 30],
      [15, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: true }
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
