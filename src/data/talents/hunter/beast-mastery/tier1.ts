import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Improved Aspect of the Hawk',
    'natures-swiftness',
    ['While Aspect of the Hawk is active, all normal ranged attacks have a ', '% chance to increase your ranged attack speed by 15% for 12 sec.'],
    5,
    [[4, 8, 12, 16, 20]]
  ),
  new Talent(
    'Improved Aspect of the Monkey',
    'aspect-monkey',
    ['Aspect of the Monkey also increases your critical strike chance with melee attacks and abilities by ', '%.'],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  null,
]
