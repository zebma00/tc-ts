import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Backstab', 'ability_backstab', ['Increases the critical strike chance of your Backstab ability by ', '%.'], 3, [[10, 20, 30]]),
  new Talent('Deflection', 'ability_parry', ['Increases your parry chance by ', '%.'], 3, [[2, 4, 6]], null, [{ x: 2, y: 1 }], null, null, null, null, ['D1'], {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Precision', 'ability_marksmanship', ['Increases your chance to hit with melee weapons by ', '%.'], 5, [[1, 2, 3, 4, 5]], [{ x: null, y: null }], [{ x: 2, y: 2 }], null, null, null, null, ['D1']),
  new Talent('Endurance', 'spell_shadow_shadowward', ['Reduces the cooldown of your Evasion and Sprint abilities by ', ' sec.'], 2, [[45, 90]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
]

export default tier2
