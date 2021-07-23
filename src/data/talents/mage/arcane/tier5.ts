import { Talent } from '../../Classes'

export default [
  new Talent('smth', '', ['sth'], 2, [[]]),
  new Talent(
    'Presence of Mind',
    'presence-of-mind',
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
  new Talent('Arcane Mind', 'arcane-mind', ['Increases your maximum mana by ', '%.'], 5, [[2, 4, 6, 8, 10]], [{ x: 2, y: 2 }]),
  null,
]
