import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Improved Overpower', 'inv_sword_05', ['Increases the critical strike chance of your Overpower by ', '%.'], 2, [[25, 50]]),
  new Talent(
    'Weapon Mastery',
    'ability_warrior_weaponmastery',
    ['Your weapon attacks generate 10% more rage. In addition, reduces the duration of all Disarm effects on you by 50%. This does not stack with other Disarm duration reducing effects.'],
    1,
    [[1]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent('Deep Wounds', 'ability_backstab', ['Your critical strikes cause the target to bleed, dealing ', "% of your melee weapon's average damage over 12 sec."], 3, [[20, 40, 60]], [{ x: 0, y: 2 }], [{ x: 3, y: 2 }], null, null, null, null, [
    'D1',
  ]),
  new Talent('Rolling Thunder', 'spell_nature_thunderclap', ['Increases the damage of your Thunder Clap by ', '% when hitting only one target.'], 3, [[100, 200, 300]], [{ x: 1, y: 3 }], null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier3
