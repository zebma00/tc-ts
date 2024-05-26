import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Enlightenment',
    'spell_arcane_mindmastery',
    ['You deal ', '% more damage while you have more than 70% mana. While below 30% mana ', '% of your mana regeneration continues while casting.'],
    2,
    [
      [5, 10],
      [5, 10],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent('Presence of Mind', 'spell_nature_enchantarmor', ['When activated, your next Mage Spell with a cast time less than 10 sec becomes an instant cast spell.'], 1, [[]], null, [{ x: 5, y: 1 }], null, null, 'Instant', '3 min cooldown', [
    'D1',
  ]),
  new Talent('Arcane Mind', 'spell_shadow_charm', ['Increases your maximum Mana by ', '%.'], 5, [[2, 4, 6, 8, 10]], [{ x: 2, y: 2 }]),
  null,
]

export default tier5
