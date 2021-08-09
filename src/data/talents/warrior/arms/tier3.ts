import { Talent } from '../../Classes'

export default [
  new Talent('Improved Overpower', 'thorns', ['Increases the critical strike chance of your Overpower by ', '%.'], 2, [[25, 50]]),
  new Talent('Anger Management', 'omen-of-clarity', ['Generates 1 rage per 3 seconds while in combat.'], 1, [[1]]),
  new Talent(
    'Deep Wounds',
    'natures-reach',
    ['Your critical strikes cause the target to bleed, dealing ', "% of your melee weapon's average damage over 12 sec."],
    3,
    [[20, 40, 60]],
    [{ x: 0, y: 2 }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  null,
]
