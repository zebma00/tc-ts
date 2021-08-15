import { Talent } from '../../Classes'

export default [
  new Talent('SMTH', '', ['SMTH ', '%.'], 2, [[10, 20]]),
  new Talent(
    'Improved Void Walker',
    'spell_shadow_summonvoidwalker',
    ["Increases the effect of your Void Walker's Torment, Sacrifice, Consume Shadows and Suffering spells by ", '%.'],
    3,
    [[10, 20, 30]]
  ),
  new Talent(
    'Fel Intellect',
    'spell_holy_magicalsentry',
    ['Increases the Intellect of your Imp, Succubus, Void Walker and Felhunter by ', '% and increases your maximum mana by ', '%.'],
    3,
    [
      [5, 10, 15],
      [1, 2, 3],
    ]
  ),
  null,
]
