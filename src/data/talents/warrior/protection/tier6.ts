import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Devastation',
    'inv_sword_11',
    ['Reduces the cost of your Sunder Armor by ', ' rage point. In addition, when you Sunder Armor, deal ', '% of weapon damage for each application of Sunder Armor on the target.'],
    3,
    [
      [1, 2, 3],
      [15, 30, 45],
    ],
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
  new Talent('One-Handed Weapon Specialization', 'inv_sword_20', ['Increases the damage you deal with One-Handed weapons by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]

export default tier6
