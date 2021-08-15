import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Fire Totems',
    'spell_fire_sealoffire',
    ['Reduces the delay before your Fire Nova Totem activates by ', ' sec and reduces the threat generated by your Magma Totem by ', '%.'],
    2,
    [
      [1, 2],
      [25, 50],
    ]
  ),
  new Talent(
    'Eye of the Storm',
    'spell_nature_eyeofthestorm',
    [
      'Gives you a ',
      '% chance to gain the focused casting effect for 6 sec after being the victim of a melee or ranged critical strike. The focused casting effect prevents you from losing casting time when taking damage.',
    ],
    3,
    [[33, 66, 100]]
  ),
  null,
  new Talent(
    'Elemental Devastation',
    'classic_spell_fire_elementaldevastation',
    ['Causes your critical strikes from spells to increase your chance to get a critical strike with melee attacks by ', '% for 10 sec.'],
    3,
    [[4, 8, 12]]
  ),
]
