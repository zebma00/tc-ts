import { Talent } from '../../Classes'

export default [
  new Talent(
    'Blood Frenzy',
    'moonfury',
    ['Your Rend and Deep Wounds abilities also increase all physical damage caused to that target by ', '%.'],
    2,
    [[2, 4]]
  ),
  null,
  new Talent('Improved Hamstring', 'moonfury', ['Gives your Hamstring a ', '% chance to immobilize the target for 5 sec.'], 3, [[10, 20, 30]]),
  null,
]
