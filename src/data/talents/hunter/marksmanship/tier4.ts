import { Talent } from '../../Classes'

export default [
  new Talent('Crossbow Specialization', 'inv_weapon_crossbow_04', ['Increases your attack speed with Crossbows by ', '%.'], 5, [[1, 2, 3, 4, 5]], null, null, null, null, null, null, null, {
    isChanged: false,
    isMoved: false,
    isNew: true,
  }),
  new Talent('Improved Serpent Sting', 'ability_hunter_quickshot', ['Increases the damage done by your Serpent Sting by ', '%.'], 3, [[4, 7, 10]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Mortal Shots', 'ability_piercedamage', ['Increases your ranged critical strike damage bonus by ', '%.'], 3, [[10, 20, 30]], [{ x: 1, y: 2 }], null, null, null, null, null, null, { isNew: false, isChanged: true, isMoved: false }),
  null,
]
