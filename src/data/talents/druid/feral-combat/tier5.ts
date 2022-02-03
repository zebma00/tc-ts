import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Savage Fury',
    'ability_druid_ravage',
    ['Increases the damage caused by your Claw, Rake, Mail and Swipe abilites by ', '%.'],
    2,
    [[10, 20]]
  ),
  null,
  new Talent(
    'Faerie Fire (Feral)',
    'spell_nature_faeriefire',
    ['Decrease the armor of the target by 175 for 40 sec. While affected, the target cannot stealth or turn invisible.'],
    1,
    [[]]
  ),
  null,
]

export default tier5
