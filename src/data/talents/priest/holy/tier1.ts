import { Talent } from '../../Classes'

export default [
  new Talent(
    'Healing Focus',
    'spell_holy_healingfocus',
    ['Gives you a ', '% chance to avoid interruption caused by damage when casting any healing spell.'],
    2,
    [[35, 70]]
  ),
  new Talent('Spell Warding', 'spell_holy_spellwarding', ['Reduces all spell damage taken by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent('Holy Specialization', 'spell_holy_sealofsalvation', ['Increases the critical effect chance of your Holy spells by ', '%.'], 5, [
    [1, 2, 3, 4, 5],
  ]),
  null,
]
