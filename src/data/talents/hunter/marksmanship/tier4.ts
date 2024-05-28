import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Serpent Sting', 'ability_hunter_quickshot', ['Increases the damage done by your Serpent Sting by ', '%.'], 3, [[10, 20, 30]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Improvied Scorpid Sting', 'ability_hunter_criticalshot', ['Increases the effect of your Scorpid Sting by ', '%.'], 2, [[1, 2]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
  null,
]
