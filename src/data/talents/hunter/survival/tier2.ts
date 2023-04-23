import { Talent } from '../../Classes'

export default [
  new Talent('Entrapment', 'spell_nature_stranglevines', ['Gives your Immolation Trap, Frost trap and Explosive Trap a ', '% chance to entrap the target, preventing them from moving for 5 sec.'], 5, [[5, 10, 15, 20, 25]]),
  new Talent('Savage Strikes', 'ability_racial_bloodrage', ['Increases the critical strike chance of Raptor Strike and Mongoose Bite by ', '%.'], 2, [[10, 20]]),
  new Talent('Improved Wing Clip', 'ability_rogue_trip', ['Gives your Wing Clip a ', '% to immobilize the target for 5 sec.'], 5, [[4, 8, 12, 16, 20]]),
  new Talent('Wild Tenacity', 'spell_nature_dryaddispelmagic', ['Increases your Arcane, Fire and Nature damage done by ', '%.'], 2, [[5, 10]], null, null, null, null, null, null, null, { isNew: true, isChanged: false, isMoved: false }),
]
