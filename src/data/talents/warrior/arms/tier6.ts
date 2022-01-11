import { Talent } from '../../Classes'

export default [
  new Talent('Axe Specialization', 'inv_weapon_halbard_01', ['Your attacks with Polearms have a ', '% chance to generate 30 rage.'], 5, [
    [1, 2, 3, 4, 5],
  ]),
  null,
  new Talent('Improved Hamstring', 'ability_shockwave', ['Gives your Hamstring a ', '% chance to immobilize the target for 5 sec.'], 3, [
    [10, 20, 30],
  ]),
  new Talent(
    'Blood Frenzy',
    'ability_warrior_bloodfrenzy',
    ['Your Rend and Deep Wounds abilities also increase all physical damage caused to that target by ', '%.'],
    2,
    [[2, 4]]
  ),
]
