import { Talent } from '../../Classes'

export default [
  new Talent('Enhancing Totems', 'vigor', ['Increases the effect of your Grace of Air and Strength of Earth Totems by ', '%'], 2, [[8, 15]]),
  null,
  new Talent('Two-Handed Axes and Maces', 'axes-and-maces', ['Allows you to use Two-Handed Axes and Two-Handed Maces.'], 1, [[]]),
  new Talent(
    'Shamanistic Focus',
    'shamanistic-focus',
    [
      'After landing a melee critical strike, you have a ',
      '% chance to enter a focused state. The focused state reduces the mana cost of your next Shock spell by 60%.',
    ],
    2,
    [[25, 50]]
  ),
]
