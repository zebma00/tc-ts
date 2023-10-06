import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Improved Overpower', 'inv_sword_05', ['Increases the critical strike chance of your Overpower by ', '%.'], 2, [[25, 50]]),
  new Talent('Bad Temper', 'ability_warrior_endlessrage', ['Increases your rage generation by 100% for 10 sec.'], 1, [[]], null, null, 'Instant', '5 min cooldown', null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Deep Wounds', 'ability_backstab', ['Your critical strikes cause the target to bleed, dealing ', "% of your melee weapon's average damage over 12 sec."], 3, [[20, 40, 60]], [{ x: 0, y: 2 }], [{ x: 3, y: 2 }], null, null, null, null, [
    'D1',
  ]),
  null,
]

export default tier3
