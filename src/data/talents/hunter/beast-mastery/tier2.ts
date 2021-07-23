import { Talent } from '../../Classes'

export default [
  new Talent('Spirit Bond', 'demoralizing-roar', ['Increases the damage you and your pet deal by ', '% while within 10 yards of each other.'], 2, [
    [2, 4],
  ]),
  new Talent('Endurance Training', 'endurance-training', ['Increases the health of your pets by ', '%.'], 3, [[5, 10, 15]]),
  new Talent('Unleashed Fury', 'natural-strength', ['Increases the damage done by your pets by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent(
    'Improved Revive Pet',
    'revive-pet',
    ["Revive Pet's casting time is reduced by ", ' sec, mana cost is reduced by ', '% and increases the health your pet returns with by ', '%.'],
    2,
    [
      [3, 6],
      [20, 40],
      [15, 30],
    ]
  ),
]
