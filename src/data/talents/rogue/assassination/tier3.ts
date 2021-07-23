import { Talent } from '../../Classes'

export default [
  new Talent('Relentless Strikes', 'relentless', ['Your Finishing Moves have a 20% chance per combo point to restore 25 energy.'], 1, [[]]),
  new Talent(
    'Envenom',
    'envenom',
    ['Increases the damage done by your bleed effects by an additional ', '% for each poison effect on the target, up to a maximum or 30%.'],
    2,
    [[3, 6]]
  ),
  new Talent(
    'Lethality',
    'lethality',
    ['Increases the Critical Strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike and Hemorrhage by ', '%.'],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: 0, y: 2 }]
  ),
  null,
]
