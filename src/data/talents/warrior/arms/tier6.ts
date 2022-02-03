import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Blood Frenzy',
    'ability_warrior_bloodfrenzy',
    ['Your Rend and Deep Wounds abilities also increase all physical damage caused to that target by ', '%.'],
    2,
    [[2, 4]],
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
  new Talent(
    'Improved Hamstring',
    'ability_shockwave',
    ['Gives your Hamstring a ', '% chance to immobilize the target for 5 sec.'],
    3,
    [[10, 20, 30]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  null,
]

export default tier6
