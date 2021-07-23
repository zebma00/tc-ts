import { Talent } from '../../Classes'

export default [
  null,
  null,
  new Talent(
    'Lightning Mastery',
    'lightning-mastery',
    ['Reduces the cast time of your Lightning Bolt and Chain Lightning spells by ', ' sec.'],
    5,
    [[0.2, 0.4, 0.6, 0.8, 1]],
    [{ x: 2, y: 2 }]
  ),
  null,
]
