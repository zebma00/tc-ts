import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Vindication',
    'spell_holy_vindication',
    ["Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by ", '% for 10 sec.'],
    2,
    [[15, 30]],
    null,
    [{ x: 4, y: 0 }],
    null,
    null,
    null,
    null,
    ['D1'],
    {
      isNew: false,
      isChanged: true,
      isMoved: true,
    }
  ),
  null,
  new Talent(
    'Two-Handed Weapon Specialization',
    'inv_hammer_04',
    ['Increases the damage you deal with two-handed melee weapons by ', '%.'],
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
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  null,
]

export default tier4
