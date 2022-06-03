import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Healing Way',
    'classic_spell_nature_healingway',
    ['Your Healing Wave spell has a ', '% chance to increase the effect of subsequent Healing Waves on that target by 6% for 15 sec. This effect stacks up to 3 times.'],
    3,
    [[33, 66, 100]]
  ),
  null,
  new Talent("Nature's Swiftness", 'spell_nature_ravenform', ['When activated, your next Nature spell becomes an instant cast spell.'], 1, [[]], null, null, null, null, 'Instant', '3 min cooldown'),
  new Talent(
    'Water Shield',
    'ability_shaman_watershield',
    [
      'The caster is surrounded by 3 globes of water, granting 23 mana per 5 sec.  When a spell, melee or ranged attack hits the caster, 92 mana is restored to the caster. This expends one water globe. Only one globe will activate every few seconds. Lasts 10 min. Only one Elemental Shield can be active on the Shaman at any one time.',
    ],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant',
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
]

export default tier5
