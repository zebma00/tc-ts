import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Crusade',
    'spell_holy_crusade',
    ['Your damaging melee attacks have a ', '% chance to refresh all Judgements on the target.'],
    2,
    [[50, 100]],
    [
      {
        x: 2,
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
    'Eye for an Eye',
    'spell_holy_eyeforaneye',
    [
      'All spell criticals against you cause ',
      "% of the damage to be taken by the caster as well. The damage caused by Eye for an Eye will not exceed more than 50% of the Paladin's total health.",
    ],
    2,
    [[25, 50]]
  ),
  new Talent(
    'Improved Seal of the Crusader',
    'spell_holy_holysmite',
    [
      'In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all attacks made against that target by an additional ',
      '%.',
    ],
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
      isMoved: true,
    }
  ),
]

export default tier4
