import { Talent } from '../../Classes'

export default [
  new Talent('Invigoration', 'spell_nature_focusedmind', ['When your pet scores a critical hit with an ability, you have a ', '% change to regenerate 1% mana.'], 2, [[50, 100]], [{ x: 4, y: 0 }], null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent('Frenzy', 'inv_misc_monsterclaw_03', ['Gives your pet a ', '% chance to gain 30% attack speed increase for 8 sec after dealing a critical strike.'], 5, [[20, 40, 60, 80, 100]], [{ x: 3, y: 2 }]),
  null,
]
