import { Talent } from '../../Classes'

const tier4 = [
  null,
  new Talent('Two-Handed Weapon Specialization', 'inv_axe_09', ['Increases the damage you deal with Two-Handed Weapons by ', '%.'], 3, [[2, 4, 6]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Impale', 'ability_searingarrow', ['Increases the critical strike damage bonus of your abilities by ', '%.'], 2, [[10, 20]], [{ x: 2, y: 2 }]),
  null,
]

export default tier4
