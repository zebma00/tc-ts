import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Enhancing Totems', 'spell_nature_earthbindtotem', ['Increases the effect of your Grace of Air and Strength of Earth Totems by ', '%'], 2, [[8, 15]]),
  null,
  new Talent('Two-Handed Axes and Maces', 'inv_axe_10', ['Allows you to use Two-Handed Axes and Two-Handed Maces.'], 1, [[]]),
  new Talent('Anticipation', 'spell_nature_mirrorimage', ['Reduces your damage taken by ', '%.'], 3, [[1, 2, 3]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
]

export default tier3
