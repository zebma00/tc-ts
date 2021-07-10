import { Talent } from '../../Classes'

export default [
  null,
  null,
  new Talent(
    "Winter's Chill",
    'winters-chill',
    [
      'Gives your Frost spells a ',
      "% chance to apply the Winter's Chill effect, which increases the critical strike chance of Frost spells against the target by 2% and all spell damage taken by 1%. This effect stacks up to 5 times.",
    ],
    5,
    [[20, 40, 60, 80, 100]]
  ),
  null,
]
