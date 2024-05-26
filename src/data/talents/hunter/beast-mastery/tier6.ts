import { Talent } from '../../Classes'

export default [
  new Talent(
    'Invigoration',
    'ability_hunter_invigeration',
    ['When your pet scores a critical hit with a special ability, you instantly regenerate ', '% of your maximum mana. 10 sec cooldown.'],
    2,
    [[5, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  null,
  new Talent('Frenzy', 'inv_misc_monsterclaw_03', ['Gives your pet a ', '% chance to gain 30% attack speed increase for 8 sec after dealing a critical strike.'], 5, [[20, 40, 60, 80, 100]], [{ x: 3, y: 2 }]),
  null,
]
