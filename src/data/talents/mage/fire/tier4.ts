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
    [[33, 67, 100]]
  ),
  new Talent(
    'Master of Elements',
    'spell_fire_masterofelements',
    ['Your Fire and Frost spell criticals refund ', '% of their base mana cost.'],
    3,
    [[10, 20, 30]]
  ),
  null,
  null,
]
export default tier4
