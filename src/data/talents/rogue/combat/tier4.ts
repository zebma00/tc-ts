import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Improved Kick', 'ability_kick', ['Gives your Kick ability a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent(
    'Close Combat Specialization',
    'inv_weapon_shortblade_05',
    ['Increases your critical strike chance and critical strike damage with daggers and fist weapons by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent(
    'Improved Sprint',
    'ability_rogue_sprint',
    ['Gives a ', '% chance to remove all movement impairing effects when you activate your Sprint ability.'],
    2,
    [[50, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  null,
]

export default tier4
