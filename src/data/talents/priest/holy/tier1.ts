import { Talent } from '../../Classes'

export default [
  new Talent(
    'Healing Focus',
    'spiritual-attunement',
    ['Gives you a ', '% chance to avoid interruption caused by damage when casting any healing spell.'],
    2,
    [[35, 70]]
  ),
  new Talent('Improved Renew', 'renew', ['Increases the amount healed by your Renew spell by ', '%.'], 3, [[5, 10, 15]]),
  new Talent('Holy Specialization', 'holy-spec', ['Increases the critical effect chance of your Holy spells by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  null,
]
