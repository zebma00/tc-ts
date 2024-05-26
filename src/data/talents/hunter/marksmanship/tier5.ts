import { Talent } from '../../Classes'

export default [
  new Talent(
    'Scatter Shot',
    'ability_golemstormbolt',
    ['A short-range shot that deals 50% weapon damage and disorients the target for 4 sec. Any damage caused will remove the effect. Turns off your attack when used.'],
    1,
    [[]],
    null,
    null,
    '8% of base mana',
    '15 yd range',
    '30 sec cooldown'
  ),
  new Talent('Barrage', 'ability_upgrademoonglaive', ['Increases the damage done by your Multi-Shot and Volley spells by ', '%.'], 3, [[5, 10, 15]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D2']),
  new Talent('Bow Specialization', 'inv_weapon_bow_07', ['Gives you a ', '% chance to trigger an additional attack against the same target when using bows.'], 5, [[1, 2, 3, 4, 5]], null, null, null, null, null, null, null, {
    isChanged: false,
    isMoved: false,
    isNew: true,
  }),
  new Talent('Gun Specialization', 'inv_weapon_rifle_03', ['Increases your critical strike chance and critical strike damage with Guns by ', '%.'], 5, [[1, 2, 3, 4, 5]], null, null, null, null, null, null, null, {
    isChanged: false,
    isMoved: false,
    isNew: true,
  }),
]
