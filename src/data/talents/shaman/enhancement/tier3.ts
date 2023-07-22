import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Enhancing Totems', 'spell_nature_earthbindtotem', ['Increases the effect of your Grace of Air and Strength of Earth Totems by ', '%'], 2, [[8, 15]]),
  null,
  new Talent(
    'Shamanistic Focus',
    'spell_nature_elementalabsorption',
    ['After landing a melee critical strike, you enter a Focused state. The Focused state reduces the mana cost of your next Shock spell by 60%.'],
    1,
    [[]],
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
  new Talent('Anticipation', 'spell_nature_mirrorimage', ['Increases your chance to dodge by an additional ', '%.'], 3, [[2, 4, 6]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
]

export default tier3
