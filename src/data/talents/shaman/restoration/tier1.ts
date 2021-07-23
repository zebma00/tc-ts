import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Healing Wave', 'healing-wave', ['Reduces the casting time of your Healing Wave spell by ', ' sec.'], 5, [
    [0.1, 0.2, 0.3, 0.4, 0.5],
  ]),
  new Talent('Tidal Focus', 'tidal-focus', ['Reduces the Mana cost of your healing and Lightning spells by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  null,
]
