import { Talent } from '../../Classes'

export default [
  new Talent(
    'Crusade',
    'crusade',
    ['Your damaging melee attacks have a ', '% chance to refresh all Judgements on the target'],
    2,
    [[50, 100]],
    [
      {
        x: 3,
        y: 0,
      },
    ]
  ),
  null,
  new Talent(
    'Seal of Command',
    'seal-command',
    [
      `Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage. Only one seal can be active on than paladin at a time. Lasts 30 sec. \n \n Unleashing this Seal's energy will Judge an enemy, instantly causing 68 to 73 Holy damage, 137 to 146 if the target is stunned or incapacitated.`,
    ],
    1,
    [[]],
    null,
    null,
    '65 Mana',
    null,
    'Instant'
  ),
  new Talent('Two-Handed Weapon Specialization', 'two-handed-spec', ['Increases the damage you deal with two-handed melee weapons by ', '%.'], 3, [
    [2, 4, 6],
  ]),
]
