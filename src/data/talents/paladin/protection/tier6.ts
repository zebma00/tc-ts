import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Improved Blessing of Freedoom',
    'spell_holy_sealofvalor',
    ['Reduces the cooldown of your Blessing of Freedom by ', ' sec. In addition, your Blessing of Freedom also reduces threat while the target is not affected by Righteous Fury.'],
    3,
    [[2, 4, 6]],
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
    'One-Handed Weapon Specialization',
    'inv_sword_20',
    ['Increases all damage you deal while wielding One-Handed melee weapons by ', '%.'],
    2,
    [[5, 10]],
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
