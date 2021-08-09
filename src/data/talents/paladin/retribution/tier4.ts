import { Talent } from '../../Classes'

export default [
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
    ['D1']
  ),
  null,
  new Talent(
    'Eye for an Eye',
    'spell_holy_eyeforaneye',
    [
      'All spell criticals against you cause ',
      "% of the damage to be taken by the caster as well. The damage caused by Eye for an Eye will not exceed more than 50% of the Paladin's total health.",
    ],
    2,
    [[25, 50]]
  ),
  null,
]
