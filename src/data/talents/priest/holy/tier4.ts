import { Talent } from '../../Classes'

export default [
  null,
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
]
