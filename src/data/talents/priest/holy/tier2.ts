import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Spell Warding', 'spell_holy_spellwarding', ['Reduces all spell damage taken by ', '%.'], 3, [[4, 7, 10]]),
  new Talent(
    'Divine Fury',
    'spell_holy_sealofwrath',
    ['Reduces the casting time of your Heal, Greater Heal, Smite and Holy Fire spells by ', '%.'],
    5,
    [[0.1, 0.2, 0.3, 0.4, 0.5]],
    [{ x: null, y: null }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]
