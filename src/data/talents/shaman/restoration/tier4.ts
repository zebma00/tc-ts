import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Tidal Surge',
    'spell_shaman_tidalwaves',
    ['Your crits from melee attacks and spells have a ', '% chance to cause your active Healing Stream Totem or Mana Spring Totem to pulse. 3 sec cooldown.'],
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
  new Talent('Restorative Totems', 'spell_nature_manaregentotem', ['Increases the effect of your Mana Spring and Healing Stream Totems by ', '%.'], 3, [[10, 20, 30]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D3'], {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Tidal Mastery', 'spell_nature_tranquility', ['Increases the critical effect chance of your Healing and Lightning spells by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  null,
]

export default tier4
