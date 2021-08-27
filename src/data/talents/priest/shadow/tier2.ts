import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Psychic Scream',
    'spell_shadow_psychicscream',
    ['Reduces the cooldown of psychic scream by ', ' sec'],
    2,
    [[2, 4]],
    [{ x: null, y: null }],
    [{ x: 4, y: 0 }],
    null,
    null,
    null,
    null,
    ['D3']
  ),
  new Talent('Improved Shadow Word: Pain', 'spell_shadow_shadowwordpain', ['Increases the duration of Shadow Word: Pain by ', ' sec.'], 2, [[3, 6]]),
    new Talent('Improved Mind Blast', 'spell_shadow_unholyfrenzy', ['Reduces the cooldown of your Mind Blast by ', ' sec.'], 5, [
    [0.5, 1, 1.5, 2, 2.5],
  ]),
  new Talent('Shadow Affinity', 'spell_shadow_shadowward', ['Reduces the threat generated by your shadow spells by ', '%.'], 3, [[8, 16, 25]]),
]
