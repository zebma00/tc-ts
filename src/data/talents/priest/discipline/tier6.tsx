import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Improved Dispel Magic',
    'spell_holy_dispelmagic',
    ['Gives a your Dispel Magic a ', '% chance to deal Holy damage for each beneficial effect dispelled and Heal for each harmful effect dispelled.'],
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
  new Talent(
    'Force of Will',
    'spell_nature_slowingtotem',
    ['Increases the critical strike chance of your offensive spells by ', '% and your spell damage by ', '%.'],
    3,
    [
      [2, 4, 6],
      [2, 4, 6],
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
  null,
]

export default tier6
