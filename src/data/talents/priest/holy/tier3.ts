import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Prayer of Mending',
    'spell_holy_prayerofmendingtga',
    [
      'Places a spell on the target that heals the next time they take damage. When the heal occurs, Prayer of Mending jumps to a raid member within 20 yards. Jumps up to 5 times and lasts 30 sec after each jump. This spell can only be placed on one target at a time.',
    ],
    1,
    [[]],
    null,
    null,
    '85 Mana',
    '40 yd range',
    'Instant',
    '10 sec cooldown',
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent('Blessed Recovery', 'spell_holy_blessedrecovery', ['After being hit by a ranged or melee critical strike, heal for ', '% of the damage taken over 8 sec.'], 3, [[8, 16, 25]]),
  new Talent('Searing Light', 'spell_holy_searinglightpriest', ['Increases the damage done by your Smite and Holy Fire spells by ', '%.'], 2, [[5, 10]], [{ x: 1, y: 2 }], null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
  new Talent('Inspiration', 'spell_holy_layonhands', ["Increases the target's armor by ", '% for 8 sec after getting a critical hit with Heal, Greater Heal, Flash Heal or Prayer of Healing.'], 3, [[8, 16, 25]]),
]

export default tier3
