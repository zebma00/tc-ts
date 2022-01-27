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
    'Empowered Elemental Shields',
    'spell_nature_elementalshields',
    ['Your attacks have a ', '% chance to expend a Lightning or Water Shield orb.'],
    2,
    [
      [15, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false
    }
  ),
]
