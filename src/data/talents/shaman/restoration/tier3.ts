import { Talent } from '../../Classes'

const tier3 = [
  new Talent("Nature's Guidance", 'spell_frost_stun', ['Increases your chance to hit with melee attacks and spells by ', '%.'], 3, [[1, 2, 3]]),
  new Talent("Nature's Focus", 'spell_nature_healingwavelesser', ['Gives you a ', '% chance to avoid interruption caused by damage while casting any Healing or Lightning spell.'], 5, [[14, 28, 42, 56, 70]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent(
    'Water Shield',
    'ability_shaman_watershield',
    [
      'The caster is surrounded by 3 globes of water, granting 12 mana per 5 sec. When a spell, melee or ranged attack hits the caster, 39 mana is restored to the caster. This expends one water globe. Only one globe will activate every few seconds.  Lasts 10 min.  Only one Elemental Shield can be active on the Shaman at any one time.',
    ],
    1,
    [[]],
    null,
    null,
    'Instant',
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent("Nature's Grace", 'spell_nature_healingtouch', ['Reduces the threat generated by your Healing and Lightning spells by ', '%.'], 3, [[7, 14, 20]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
]

export default tier3
