import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Arcane Impact',
    'spell_arcane_arcanetorrent',
    [
      'Gives your arcane spells a ',
      '% chance to apply the Arcane Impact effect, which increases the damage of arcane spells done to the target by 1%. Stacks up to 10 times.',
    ],
    2,
    [[50, 100]],
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
  new Talent('Arcane Mind', 'spell_shadow_charm', ['Increases your maximum mana by ', '%.'], 5, [[2, 4, 6, 8, 10]], [{ x: 2, y: 2 }]),
  null,
]

export default tier5
