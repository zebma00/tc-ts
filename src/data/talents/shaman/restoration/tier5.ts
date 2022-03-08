import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Healing Way',
    'classic_spell_nature_healingway',
    [
      'Your Healing Wave spell has a ',
      '% chance to increase the effect of subsequent Healing Waves on that target by 6% for 15 sec. This effect stacks up to 3 times.',
    ],
    3,
    [[33, 66, 100]]
  ),
  null,
  new Talent("Nature's Swiftness", 'spell_nature_ravenform', ['When activated, your next Nature spell becomes an instant cast spell.'], 1, [
    [],
  ]),
  new Talent(
    'Improved Tranquil Air Totem',
    'spell_nature_brilliance',
    ['Your Tranquil Air Totem also reduces threat caused by critical strikes and spell critical strikes by an additional ', '%.'],
    2,
    [[10, 20]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
]

export default tier5
