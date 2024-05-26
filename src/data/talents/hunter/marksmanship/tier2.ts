import { Talent } from '../../Classes'

export default [
  new Talent('Improvied Scorpid Sting', 'ability_hunter_criticalshot', ['Increases the effect of your Scorpid Sting by ', '%.'], 2, [[1, 2]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
  new Talent('Improved Arcane Shot', 'ability_impalingbolt', ['Your Auto Shot hits reduce the cooldown of your Arcane Shot by ', ' sec.'], 2, [[0.25, 0.5]], null, [{ x: 2, y: 1 }], null, null, null, null, ['D1'], {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
  new Talent('Lethal Shots', 'ability_searingarrow', ['Increases your critical strike chance with ranged weapons by ', '%.'], 5, [[1, 2, 3, 4, 5]], [{ x: null, y: null }], [{ x: 3, y: 2 }], null, null, null, null, ['D2']),
  null,
]
