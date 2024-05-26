import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Improved Hamstring', 'ability_shockwave', ['Gives your Hamstring a ', '% chance to immobilize the target for 5 sec.'], 3, [[10, 20, 30]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
  new Talent('Two-Handed Weapon Specialization', 'inv_axe_09', ['Increases the damage you deal with Two-Handed Weapons by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  new Talent('Impale', 'ability_searingarrow', ['Increases the critical strike damage bonus of your abilities by ', '%.'], 2, [[10, 20]], [{ x: 2, y: 2 }]),
  null,
]

export default tier4
