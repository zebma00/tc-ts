import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Improved Scorch',
    'spell_fire_soulburn',
    [
      'Your Scorch spell has a ',
      '% chance to cause your target to be vulnerable to Fire damage. This vulnaribility increases Fire damage taken by the target by 3% and lasts 30 sec. Stacks  up to 5 times.',
    ],
    3,
    [[33, 66, 100]]
  ),
  new Talent(
    'Hot Streak',
    'ability_mage_hotstreak',
    [
      'Any time you score two spell criticals in a row with Fire Blast or Scorch, you have a ',
      '% chance to reduce the cast time of your next Pyroblast or Flamestrike spell by 3 sec. This effect lasts 10 sec.',
    ],
    2,
    [[50, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
  new Talent('Master of Elements', 'spell_fire_masterofelements', ['Your Fire and Frost spell criticals refund ', '% of their base mana cost.'], 3, [[10, 20, 30]]),
]
export default tier4
