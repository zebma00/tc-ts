import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Restorative Surge',
    'spell_nature_giftofthewaterspirit',
    ['Critical strikes from your attacks and damaging spells have a ', '% chance to trigger your active Mana Spring or Healing Stream Totem.'],
    2,
    [[25, 50]],
    [{ x: 3, y: 1 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    'Restorative Totems',
    'spell_nature_manaregentotem',
    ['Increases the effect of your Mana Spring and Healing Stream Totems by ', '%. In addition, you gain an additional ', '% Mana or Health from your Mana Spring and Healing Stream Totems.'],
    3,
    [
      [10, 20, 30],
      [20, 40, 60],
    ],
    [{ x: null, y: null }],
    [
      { x: 6, y: 1 },
      { x: 3, y: 0 },
    ],
    null,
    null,
    null,
    null,
    ['D3', 'L1'],
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
