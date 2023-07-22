import { Talent } from '../../Classes'

const tier6 = [
  null,
  new Talent(
    'Vengeance',
    'ability_racial_avatar',
    ['Gives you a ', '% bonus to your physical and Holy damage and healing for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.'],
    3,
    [[10, 20, 30]],
    [{ x: 2, y: 1 }],
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
    'Holy Fervor',
    'spell_holy_blessedresillience',
    ['Your Judgement has a ', '% chance to refresh all Judgement effects on the target and increase the effect of Judgement effects on the target by 30% for 8 sec.'],
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
  null,
]

export default tier6
