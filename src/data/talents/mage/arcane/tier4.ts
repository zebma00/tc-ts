import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Counterspell', 'spell_frost_iceshock', ['Gives your counterspell a ', ' chance to silence the target for 4 sec.'], 2, [
    [50, 100],
  ]),
  null,
  new Talent('Arcane Meditation', 'spell_shadow_siphonmana', ['Allows ', ' of your Mana regeneration to continue while casting.'], 3, [[10, 20, 30]]),
]
