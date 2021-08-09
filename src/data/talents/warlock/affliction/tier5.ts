import { Talent } from '../../Classes'

export default [
  new Talent('Malediction', 'starfire', ['Increases the damage bonus of your Curse of Shadows and Curse of Elements effects by ', '%.'], 3, [
    [1, 2, 3],
  ]),
  new Talent(
    'Siphon Life',
    'natures-grace',
    ['Transfers 15 health from the target to the caster every 3 sec. Lasts 30 sec.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }],
    '150 Mana',
    '30 yd range',
    'Instant',
    null,
    ['D1']
  ),
  new Talent(
    'Curse of Exhaustion',
    'moonglow',
    ["Reduces the target's movement speed by 10% for 12 sec. Only one curse can be active per Warlock on a target."],
    1,
    [[1]],
    [{ x: 2, y: 2 }],
    [{ x: 4, y: 3 }],
    '8% of base mana',
    '30 yd range',
    'Instant',
    null,
    ['R1']
  ),
  new Talent(
    'Improved Curse of Exhaustion',
    'moonglow',
    ['Increases the speed reduction of your Curse of Exhaustion by ', '%.'],
    2,
    [[10, 20]],
    [{ x: 4, y: 2 }]
  ),
]
