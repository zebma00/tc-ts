import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Improved Aspect of the Hawk',
    'spell_nature_ravenform',
    ['While Aspect of the Hawk is active, all normal ranged attacks have a ', '% chance to increase your ranged attack speed by 30% for 12 sec.'],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  new Talent('Endurance Training', 'spell_nature_reincarnation', ['Increases the health of your pets by ', '%.'], 5, [[3, 6, 9, 12, 15]]),
  null,
]
