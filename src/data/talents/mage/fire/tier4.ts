import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Scorch',
    'spell_fire_soulburn',
    [
      'Your Scorch spell has a ',
      '% chance to cause your target to be vulnerable to Fire damage. This vulnaribility increases Fire damage taken by the target by 3% and lasts 30 sec. Stacks  up to 5 times.',
    ],
    3,
    [[33, 67, 100]]
  ),
  new Talent(
    'Molten Blood',
    'spell_fire_moltenblood',
    ['After being hit by a melee or ranged critical strike, deal fire damage equal to ', '% of the damage taken to the attacker.'],
    2,
    [[8, 15]]
  ),
  null,
  new Talent('Master of Elements', 'spell_fire_masterofelements', ['Your Fire and Frost spell criticals refund ', '% of their base mana cost.'], 3, [
    [10, 20, 30],
  ]),
]
