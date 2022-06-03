import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Serpent Sting', 'ability_hunter_quickshot', ['Increases the damage done by your Serpent Sting by ', '%.'], 3, [[4, 7, 10]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent(
    'Improvied Scorpid Sting',
    'ability_hunter_criticalshot',
    ['Your Scorpid Sting also reduces physical damage dealt by the target by ', '%.'],
    2,
    [[2, 4]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: true,
    }
  ),
  null,
]
