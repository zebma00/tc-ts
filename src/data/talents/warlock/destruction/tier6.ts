import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier6 = [
  new Talent(
    'Improved Soul Fire',
    'spell_fire_fireball02',
    ['Critical strikes from your Fire spells increase the damage of your next Soul Fire by ', '%. This effect stacks up to 5 times.'],
    2,
    [[10, 20]],
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
=======
export default [
	null,
	null,
	new Talent('Emberstorm', 'spell_fire_selfdestruct', ['Increases the damage done by your Fire spells by ', '%.'], 5, [
		[2, 4, 6, 8, 10],
	]),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier6
