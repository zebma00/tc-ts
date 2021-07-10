import { Talent } from '../../Classes'

export default [
  new Talent(
    'Arcane Sublety',
    'arcane-sublety',
    ["Reduces your target's resistance to all your spells by ", ' and reduces the threat caused by your arcane spells by ', '%.'],
    2,
    [
      [5, 10],
      [20, 40],
    ]
  ),
  new Talent('Arcane Focus', 'arcane-focus', ['Reduces the chance that the opponent can resist your Arcane spells by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent(
    'Improved Arcane Missiles',
    'moonfire',
    ['Gives you a ', ' chance to avoid interruption caused by damage while channeling Arcane Missiles.'],
    5,
    [[20, 40, 60, 80, 100]]
  ),
  null,
]
