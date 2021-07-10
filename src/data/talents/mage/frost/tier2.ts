import { Talent } from '../../Classes'

export default [
  new Talent('Ice Shards', 'ice-shards', ['Increases the critical strike damage bonus of your Forst spells by ', '%.'], 5, [[20, 40, 60, 80, 100]]),
  new Talent('Frostbite', 'frostbite', ['Gives your Chill effects a ', '% chance to freeze the target for 5 sec.'], 3, [[5, 10, 15]]),
  new Talent(
    'Improved Frost Nova',
    'frost-nova',
    ['Reduces the cooldown of your Frost Nova spell by ', ' sec.'],
    2,
    [[2, 4]],
    [{ x: null, y: null }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent(
    'Permafrost',
    'permafrost',
    ['Increases the duration of your Chill effects by ', " sec and reduces the target's speed by an additional ", '%.'],
    3,
    [
      [1, 2, 3],
      [4, 7, 10],
    ]
  ),
]
