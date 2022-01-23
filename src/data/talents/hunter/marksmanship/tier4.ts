import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Improved Serpent Sting',
    'ability_hunter_quickshot',
    ['Your Serpent Sting also increases damage dealt by poison effects by ', '%.'],
    3,
    [[5, 10, 15]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false,
      isChanged: true,
      isMoved: false
    }
  ),
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
    { isNew: false,
      isChanged: true,
      isMoved: true
    }
  ),
  null,
]
