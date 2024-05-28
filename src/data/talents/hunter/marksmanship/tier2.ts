import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Arcane Shot', 'ability_impalingbolt', ['Your Auto Shot hits reduce the cooldown of your Arcane Shot by ', ' sec.'], 2, [[0.25, 0.5]], null, [{ x: 2, y: 1 }], null, null, null, null, ['D1'], {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
  new Talent('Mortal Shots', 'ability_piercedamage', ['Increases your ranged critical strike damage bonus by ', '%.'], 5, [[6, 12, 18, 24, 39]], [{ x: 0, y: 2 }], null, null, null, null, null, null, { isNew: false, isChanged: false, isMoved: true }),
  null,
]
