import { Talent } from '../../Classes'

const tier6 = [
  null,
  new Talent('Mental Strength', 'spell_nature_enchantarmor', ['Increases your Intellect, Stamina and Spirit by ', '%.'], 3, [[3, 6, 9]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D1'], {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
  new Talent(
    'Improved Dispel Magic',
    'spell_holy_dispelmagic',
    ['Gives a your Dispel Magic a ', '% chance to deal Holy damage for each beneficial effect dispelled and Heal for each harmful effect dispelled. This damage or healing causes no additional threat.'],
    2,
    [[50, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isMoved: false, isChanged: false }
  ),
  null,
]

export default tier6
