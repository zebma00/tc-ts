import { Talent } from '../../Classes'

const tier3 = [
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
    'Discharge',
    'spell_nature_elementalshields',
    ['Your attacks have ', ' chance based on weapon speed to expend a Lightning or Water Shield orb.'],
    2,
    [['a', 'an increased']],
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
      isMoved: false,
    }
  ),
]

export default tier3
