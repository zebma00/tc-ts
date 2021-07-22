import { Talent } from '../../Classes'

export default [
  new Talent('Holy Reach', 'cleanse', ['ncreases the range of Smite and Holy Fire and the radius of Holy Nova and Prayer of Healing by ', '%.'], 2, [
    [10, 20],
  ]),
  new Talent('Spiritual Guidance', 'spiritual-guidance', ['Increases healing and spell damage by ', '% of your total Spirit.'], 5, [
    [5, 10, 15, 20, 15],
  ]),
  new Talent(
    'Searing Light',
    'searing-light',
    ['Increases the damage done by your Smite and Holy Fire spells by ', '% an increases their chance to hit by ', '%.'],
    2,
    [
      [5, 10],
      [2, 4],
    ],
    [{ x: 1, y: 2 }]
  ),
  null,
]
