import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Crusade',
    'spell_holy_crusade',
    ['Your damaging melee attacks have a ', '% chance to refresh all Judgements on the target.'],
    2,
    [[50, 100]],
    [
      {
        x: 3,
        y: 0,
      },
    ],
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
    'Seal of Command',
    'ability_warrior_innerrage',
    [
      `Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage. Only one seal can be active on than paladin at a time. Lasts 30 sec. \n \n Unleashing this Seal's energy will Judge an enemy, instantly causing 68 to 73 Holy damage, 137 to 146 if the target is stunned or incapacitated.`,
    ],
    1,
    [[]],
    null,
    null,
    '65 Mana',
    null,
    'Instant',
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

export default tier5
