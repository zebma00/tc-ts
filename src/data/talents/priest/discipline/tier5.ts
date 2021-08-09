import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Force of Will',
    'spell_nature_slowingtotem',
    ['Increases the critical strike chance of your offensive spells by ', '% and your spell damage by ', '%.'],
    5,
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ]
  ),
  new Talent(
    'Divine Spirit',
    'spell_holy_divinespirit',
    ['Holy power infuses the target, increasing their spirit by 17 for 30 min.'],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    [{ x: 4, y: 3 }],
    '140 Mana',
    '30 yd range',
    'Instant',
    null,
    ['R1']
  ),
  new Talent(
    'Improved Divine Spirit',
    'spell_holy_divinespirit',
    [
      "Your Divine Spirit and Prayer of Spirit spells also increase the target's spell damage and healing by an amount equal to ",
      '% of their total Spirit.',
    ],
    2,
    [[5, 10]],
    [{ x: 4, y: 2 }]
  ),
  ,
]
