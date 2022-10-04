import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Improved Arcane Shot',
    'ability_impalingbolt',
    ['Your auto shot hits reduce the cooldown of your Arcane Shot by ', ' sec.'],
    5,
    [[0.1, 0.2, 0.3, 0.4, 0.5]],
    null,
    [{ x: 2, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1'],
    { isNew: false, isChanged: true, isMoved: true }
  ),
  new Talent('Mortal Shots', 'ability_piercedamage', ['Increases your ranged critical strike damage bonus by ', '%.'], 3, [[10, 20, 30]], [{ x: 0, y: 2 }], null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
  null,
]
