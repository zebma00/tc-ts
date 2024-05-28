import { Talent } from '../../Classes'

export default [
  new Talent('Wild Assault', 'ability_warrior_punishingblow', ["Your pet's critical strikes from abilities have a ", '% chance to reduce the cooldown of your Raptor Strike by 1 sec.'], 2, [[50, 100]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Untamed', 'spell_nature_dryaddispelmagic', ['Increases your Arcane, Fire and Nature damage by up to ', '% of your attack power.'], 5, [[10, 20, 30, 40, 50]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Deflection', 'ability_parry', ['Increases your parry chance by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  null,
]
