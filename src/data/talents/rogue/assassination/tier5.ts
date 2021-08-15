import { Talent } from '../../Classes'

export default [
  new Talent('Improved Expose Armor', 'ability_warrior_riposte', ['Increases the armor reduction by your Expose Armor by ', '%.'], 2, [[25, 50]]),
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
