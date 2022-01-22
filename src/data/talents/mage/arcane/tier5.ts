import { Talent } from '../../Classes'

export default [
  new Talent(
    'Focus Magic',
    'spell_arcane_arcanetorrent',
    [
      "Increases the target's chance to critically hit with spells by 3%. When the target critically hits, the caster's chance to critically hit with spells is increased by 3% for 10 sec. Cannot be cast on self.",
    ],
    1,
    [[]],
    null,
    null,
    '6% of base mana',
    '30 yd range',
    'Instant cast'
  ),
  new Talent(
    'Presence of Mind',
    'spell_nature_enchantarmor',
    ['When activated, your next Mage Spell with a cast time less than 10 sec becomes an instant cast spell.'],
    1,
    [[]],
    null,
    [{ x: 5, y: 1 }],
    null,
    null,
    'Instant',
    '3 min cooldown',
    ['D1']
  ),
  new Talent('Arcane Mind', 'spell_shadow_charm', ['Reduces the Mana cost of your Arcane spells by ', '%.'], 5, [[2, 4, 6, 8, 10]], [{ x: 2, y: 2 }]),
  new Talent(
    'Magic Absorbtion',
    'spell_nature_astralrecalgroup',
    ['Causes you to restore ', '% mana after fully resisting or absorbing spell damage. 15 sec cooldown.'],
    3,
    [[2, 4, 6]]
  ),
]
