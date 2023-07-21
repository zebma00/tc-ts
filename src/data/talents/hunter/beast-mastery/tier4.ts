import { Talent } from '../../Classes'
export default [
  null,
  new Talent('Invigoration', 'spell_nature_focusedmind', ['When your pet scores a critical hit with an ability, you have a ', '% change to regenerate 1% mana.'], 2, [[50, 100]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Ferocity', 'inv_misc_monsterclaw_04', ['Increases the critical strike chance of your pets by ', '%.'], 5, [[3, 6, 9, 12, 15]], [{ x: null, y: null }], [{ x: 5, y: 2 }], null, null, null, null, ['D2']),
  null,
]
