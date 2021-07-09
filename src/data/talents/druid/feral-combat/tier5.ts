import { Talent } from '../../Classes'

export default [
  new Talent('Savage Fury', 'rake', ['Increases the damage caused by your Claw, Rake, Mail and Swipe abilites by ', '%.'], 2, [[10, 20]]),
  null,
  new Talent(
    'Faerie Fire (Feral)',
    'faerie-fire',
    ['Decrease the armor of the target by 175 for 40 sec. While affected, the target cannot stealth or turn invisible.'],
    1,
    [[]]
  ),
  null,
]
