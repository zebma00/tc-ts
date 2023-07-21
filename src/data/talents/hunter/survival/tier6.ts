import { Talent } from '../../Classes'

export default [
  new Talent(
    'Expose Weakness',
    'ability_rogue_findweakness',
    ['Your melee and ranged critical strikes have a ', '% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the attack power of all attackers against that target by 25% of your agility for 7 sec.'],
    2,
    [[50, 100]],
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
  new Talent('Lightning Reflexes', 'spell_nature_invisibilty', ['Increases our agility by ', '%.'], 3, [[5, 10, 15]], null, null, null, null, null, null, null, { isNew: false, isChanged: true, isMoved: false }),
  null,
]
