import { Talent } from '../../Classes'

export default [
  new Talent(
    'Healing Way',
    'healing-way',
    [
      'Your Healing Wave spell has a ',
      '% chance to increase the effect of subsequent Healing Waves on that target by 6% for 15 sec. This effect stacks up to 3 times.',
    ],
    3,
    [[33, 66, 100]]
  ),
  null,
  new Talent("Nature's Swiftness", 'natures-swiftness', ['When activated, your next Nature spell becomes an instant cast spell.'], 1, [[]]),
  null,
]
