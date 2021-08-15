import { Talent } from '../../Classes'

export default [
  new Talent(
    'Blood Frenzy',
    'ability_warrior_bloodfrenzy',
    ['Your Rend and Deep Wounds abilities also increase all physical damage caused to that target by ', '%.'],
    2,
    [[2, 4]]
  ),
  null,
  new Talent('Improved Hamstring', 'ability_shockwave', ['Gives your Hamstring a ', '% chance to immobilize the target for 5 sec.'], 3, [
    [10, 20, 30],
  ]),
  null,
]
