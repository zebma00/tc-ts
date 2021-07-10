import { Talent } from '../../Classes'

export default [
  new Talent(
    'Ignite',
    'ignite',
    ['Your critical strikes from Fire damage spells cause the target to burn for an additional ', "% of your spell's damage for 4 sec."],
    5,
    [[8, 16, 24, 32, 40]]
  ),
  new Talent('Flame Throwing', 'flame-throwing', ['Increases the range of your Fire spells by ', ' yards'], 2, [[3, 6]]),
  new Talent('Improved Fire Blast', 'fire-blast', ['Reduces the cooldown of your Fire Blast by ', ' sec.'], 3, [[0.5, 1, 1.5]]),
  null,
]
