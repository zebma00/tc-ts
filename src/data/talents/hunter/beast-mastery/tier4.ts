import { Talent } from '../../Classes'
export default [
  null,
  new Talent(
    'Caretaker',
    'ability_hunter_mendpet',
    [
      'Gives your Mend Pet spell a ',
      "% chance to remove 1 poison, disease, curse of magic effect from your pet each tick. In addition, Revive Pet's casting time is reduced by ",
      ' sec, mana cost is reduced by ',
      '%, and increases the health your pet returns with by an additional ',
      '%.',
    ],
    2,
    [
      [15, 30],
      [3, 6],
      [20, 40],
      [15, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    'Ferocity',
    'inv_misc_monsterclaw_04',
    ['Increases the critical strike chance of your pets by ', '%.'],
    5,
    [[3, 6, 9, 12, 15]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]
