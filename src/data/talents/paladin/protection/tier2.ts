import { Talent } from '../../Classes'

export default [
  new Talent(
    'Holy Guidance',
    'ability_rogue_ambush',
    ['Increases your chance to hit with melee attacks and spells by ', '%.'],
    3,
    [[1, 2, 3]],
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
  new Talent(
    "Guardian's Favor",
    'spell_holy_sealofprotection',
    [
      'Reduces the cooldown of your Blessing of Protection by  ',
      ' sec and increases the duration of your Blessing of Freedom by ',
      ' sec.',
    ],
    2,
    [
      [60, 120],
      [3, 6],
    ]
  ),
  null,
  new Talent(
    'Divine Purpose',
    'spell_holy_divinepurpose',
    ['Increases the Holy damage you deal to enemies that are stunned or incapacitated by ', '%.'],
    2,
    [[10, 20]],
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
]
