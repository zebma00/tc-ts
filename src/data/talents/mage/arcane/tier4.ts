import { Talent } from '../../Classes'

export default [
  new Talent(
    'Magic Absorbtion',
    'spell_nature_astralrecalgroup',
    ['Causes you to restore ', '% mana after fully resisting or absorbing spell damage. 15 sec cooldown.'],
    3,
    [[2, 4, 6]]
  ),
  new Talent('Improved Counterspell', 'spell_frost_iceshock', ['Gives your counterspell a ', ' chance to silence the target for 4 sec.'], 2, [
    [50, 100],
  ]),
  null,
  new Talent('Arcane Meditation', 'spell_shadow_siphonmana', ['Allows ', ' % of your Mana regeneration to continue while casting.'], 3, [
    [10, 20, 30],
  ]),
]
