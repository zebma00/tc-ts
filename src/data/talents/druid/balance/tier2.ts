import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Entangling Roots',
    'spell_nature_stranglevines',
    ['Gives you a ', '% chance to avoid interruption caused by damage while casting Entangling Roots.'],
    3,
    [[40, 70, 100]]
  ),
  new Talent(
    'Improved Moonfire',
    'spell_nature_starfall',
    ['Increases the damage and critical strike chance of your Moonfire spell by ', '%.'],
    2,
    [[5, 10]],
    [{ x: null, y: null }],
    [{ x: 3, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2'],
    { isNew: false,
      isChanged: true,
      isMoved: false
    }),
  new Talent(
    'Natural Weapons',
    'inv_staff_01',
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
  new Talent('Natural Shapeshifter', 'spell_nature_wispsplode', ['Reduces the mana cost of all Shapeshifting by ', '%.'], 3, [[10, 20, 30]]),
]
