import { Talent } from '../../Classes'

export default [
  new Talent(
    'Enhancing Totems',
    'spell_nature_earthbindtotem',
    ['Increases the effect of your Grace of Air and Strength of Earth Totems by ', '%'],
    2,
    [[8, 15]]
  ),
  null,
  new Talent('Two-Handed Axes and Maces', 'inv_axe_10', ['Allows you to use Two-Handed Axes and Two-Handed Maces.'], 1, [[]]),
  new Talent(
    'Shamanistic Focus',
    'spell_nature_elementalabsorption',
    [
      'After landing a melee critical strike, you have a ',
      '% chance to enter a focused state. The focused state reduces the mana cost of your next Shock spell by 60%.',
    ],
    2,
    [[25, 50]]
  ),
]
