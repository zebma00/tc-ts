import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Entangling Roots',
    'entangling-roots',
    ['Gives you a ', '% chance to avoid interruption caused by damage while casting Entangling Roots.'],
    3,
    [[40, 70, 100]]
  ),
  new Talent(
    'Improved Moonfire',
    'moonfire',
    ['Increases the damage and critical strike chance of your Moonfire spell by ', '%.'],
    2,
    [[5, 10]],
    [{ x: null, y: null }],
    [{ x: 3, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent(
    'Natural Weapons',
    'natural-weapons',
    ['Increases the damage you deal with physical attacks in all forms by ', '%.'],
    5,
    [[2, 4, 6, 8, 10]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent('Natural Shapeshifter', 'arcane-explosion', ['Reduces the mana cost of all Shapeshifting by ', '%.'], 3, [[10, 20, 30]]),
]
