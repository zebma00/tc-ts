import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Spiritual Attunement', 'spiritual-attunement', ['When you are healed, you gain mana equal to ', '% of the amount healed.'], 5, [
    [2, 4, 6, 8, 10],
  ]),
  new Talent(
    'Redoubt',
    'redoubt',
    ['Increases your chance to block by ', '% after beint the civtim of a critical strike. Lasts 10 sec or 5 blocks.'],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]
