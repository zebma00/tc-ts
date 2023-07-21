import { Talent } from '../../Classes'

export default [
  new Talent('Improved Mult-Shot', 'ability_upgrademoonglaive', ['Causes your Multi-Shot to return ', '% of its mana cost when hitting one target.'], 2, [[25, 50]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Barrage', 'ability_marksmanship', ['Increases the damage done by your Multi-Shot and Volley spells by ', '%.'], 3, [[5, 10, 15]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D2']),
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
  new Talent('Ranger', 'ability_hunter_mastermarksman', ['Increases your physical damage dealt to target that are further than 30 yards away by ', '%.'], 2, [[3, 6]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]
