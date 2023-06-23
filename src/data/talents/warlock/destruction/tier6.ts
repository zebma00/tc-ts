import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Improved Soul Fire',
    'spell_fire_fireball02',
    ['Critical strikes from your Fire spells have a ', '% chance to increase the damage of your next Soul Fire by 10% and increase the cast time by 0.2 sec. This effect stacks up to 10 times.'],
    2,
    [[25, 50]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
  new Talent('Emberstorm', 'spell_fire_selfdestruct', ['Increases the damage done by your Fire spells by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]

export default tier6
