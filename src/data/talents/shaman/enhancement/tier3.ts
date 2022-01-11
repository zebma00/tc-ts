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
    'Improved Elemental Shields',
    'spell_nature_lightningshield',
    ['Your attacks have a ', '% chance to expend a Lightning Shield orb. Your spells have a ', '% chance to expend a Water Shield orb.'],
    3,
    [
      [8, 16, 25],
      [8, 16, 25],
    ]
  ),
]
