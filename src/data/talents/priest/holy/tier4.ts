import { Talent } from '../../Classes'

export default [
  new Talent(
    'Holy Reach',
    'spell_holy_purify',
    ['ncreases the range of Smite and Holy Fire and the radius of Holy Nova and Prayer of Healing by ', '%.'],
    2,
    [[10, 20]]
  ),
  new Talent('Improved Healing', 'spell_holy_heal02', ['Reduces the mana cost of your Lesser Heal, Heal and Greater Heal spells by ', '%.'], 3, [
    [5, 10, 15],
  ]),
  new Talent(
    'Searing Light',
    'spell_holy_searinglightpriest',
    ['Increases the damage done by your Smite and Holy Fire spells by ', '% an increases their chance to hit by ', '%.'],
    2,
    [
      [5, 10],
      [2, 4],
    ],
    [{ x: 1, y: 2 }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent('Spiritual Guidance', 'spell_holy_spiritualguidence', ['Increases healing and spell damage by ', '% of your total Spirit.'], 5, [
    [5, 10, 15, 20, 15],
  ]),
]
