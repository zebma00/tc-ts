import { Talent } from '../../Classes'

export default [
  new Talent('Wand Specialization', 'wand-specialization', ['Increases the damage you deal with wands by ', '%.'], 2, [[13, 25]]),
  new Talent(
    'Magic Absorbtion',
    'magic-absorbtion',
    ['Causes you to restore ', '% mana after fully resisting or absorbing spell damage. 20 sec cooldown'],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  new Talent(
    'Arcane Concentration',
    'clearcasting',
    [
      'Gives you a ',
      ' chance of entering a clearcasting state after any damage spell hits a target. The clearcasting state reduces the mana cost of your next damage spell by 100%.',
    ],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  null,
]
