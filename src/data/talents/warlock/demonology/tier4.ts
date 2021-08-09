import { Talent } from '../../Classes'

export default [
  new Talent(
    'Fel Protection',
    's',
    [
      "Increases your demon's chance to dodge or resist are of effect damage by ",
      '% and increases your chance to dodge or resist are of effect damage by ',
      '%.',
    ],
    3,
    [
      [25, 50, 75],
      [15, 30, 45],
    ]
  ),
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
