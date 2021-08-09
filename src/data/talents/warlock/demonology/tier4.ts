import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Unholy Power',
    'predatory-strikes',
    ['Increases the damage done by your Imp, Succubus, Void Walker and Felhunter by ', '%.'],
    5,
    [[4, 8, 12, 16, 20]],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent(
    'Master Summoner',
    'rip',
    ['Reduces the casting time of your summon Succubus, Imp, Felhunter or Void Walker by ', ' sec and Mana cost reduced by ', '%.'],
    2,
    [
      [2, 4],
      [20, 40],
    ],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  null,
]
