import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improvied Scorpid Sting', 'scorpid-sting', ['Increases the effect of your Scorpid Sting by ', '%.'], 3, [[10, 20, 30]]),
  new Talent(
    'Mortal Shots',
    'mortal-shots',
    ['Increases your ranged critical strike damage bonus by ', '%.'],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: 0, y: 2 }]
  ),
  null,
]
