import { Talent } from '../../Classes'

export default [
  new Talent('Improved Kick', 'ability_kick', ['Gives your Kick ability a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent(
    'Dagger Specialization',
    'inv_weapon_shortblade_05',
    ['Increases your critical strike chance and critical strike damage with daggers by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  new Talent(
    'Fist Weapon Specialization',
    'inv_gauntlets_04',
    ['Your melee attacks with Fist Weapons have a ', '% chance to generate 30 energy.'],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  new Talent(
    'Blade Twisting',
    'ability_rogue_bladetwisting',
    ['Gives your Sinister Strike, Backstab and Hemorrhage abilities a ', '% chance to daze the target for 8 sec.'],
    2,
    [[10, 20]]
  ),
]
