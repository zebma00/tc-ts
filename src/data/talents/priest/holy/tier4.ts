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
  null,
  new Talent('Spiritual Guidance', 'spell_holy_spiritualguidence', ['Increases healing and spell damage by ', '% of your total Spirit.'], 3, [
    [8, 16, 25],
  ]),
]
