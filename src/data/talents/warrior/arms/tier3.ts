import { Talent } from '../../Classes'

export default [
  new Talent(
    'Trauma',
    'ability_warrior_focusedrage',
    ['Your melee critical strikes increase the effectiveness of Bleed effects on the target by ', '% for 1 min.'],
    2,
    [[10, 20]]
  ),
  new Talent('Anger Management', 'spell_holy_blessingofstamina', ['Generates 1 rage per 3 seconds while in combat.'], 1, [[1]]),
  new Talent(
    'Deep Wounds',
    'ability_backstab',
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
