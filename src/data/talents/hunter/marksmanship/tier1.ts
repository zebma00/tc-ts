import { Talent } from '../../Classes'

export default [
  new Talent("Improved Hunter's Mark", 'ability_hunter_snipershot', ['Causes ', "% of your Hunter's Mark ability to apply to melee attack power as well."], 2, [[50, 100]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
  new Talent('Improved Concussive Shot', 'spell_frost_stun', ['Gives your Concussive Shot a ', '% chance to stun the target for 3 sec.'], 5, [[4, 8, 12, 16, 20]]),
  new Talent('Lethal Shots', 'ability_searingarrow', ['Increases your critical strike chance with ranged weapons by ', '%.'], 5, [[1, 2, 3, 4, 5]], [{ x: null, y: null }], [{ x: 1, y: 2 }], null, null, null, null, ['D1'], {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
  null,
]
