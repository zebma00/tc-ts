import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Master of Deception', 'arcane-mind', ['Reduces the chance enemies can detect you while in stealth.'], 5, [[]]),
  new Talent(
    'Opportunity',
    'opportunity',
    ['Increases the damage when striking from behind with your Backstab, Ambush and garrote abilities by ', '%.'],
    5,
    [[4, 8, 12, 16, 20]]
  ),
  null,
]
