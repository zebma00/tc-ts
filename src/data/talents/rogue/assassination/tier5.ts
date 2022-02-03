import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Envenom',
    'ability_creature_poison_06',
    [
      'Increases the damage done by your bleed effects by an additional ',
      '% for each poison effect on the target, up to a maximum or 30%.',
    ],
    2,
    [[3, 6]],
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
  new Talent(
    'Cold Blood',
    'spell_ice_lament',
    ['When activated, increases the critical strike chance of your Sinister Strike, Backstab, Ambush or Eviscerate by 100%.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }],
    null,
    null,
    'Instant',
    '3 min cooldown',
    ['D1']
  ),
  new Talent(
    'Improved Kidney Shot',
    'ability_rogue_kidneyshot',
    ['While effected by your Kidney Shot ability, the target receives an additional ', '% damage.'],
    3,
    [[3, 6, 9]]
  ),
  null,
]

export default tier5
