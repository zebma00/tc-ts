import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Prayer of Mending',
    'spell_holy_prayerofmendingtga',
    [
      'Places a spell on the target that heals them for 800 the next time they take damage. When the heal occurs, Prayer of Mending jumps to a raid member within 20 yards.  Jumps up to 5 times and lasts 30 sec after each jump.  This spell can only be placed on one target at a time.',
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    '225 Mana',
    '30 yd range',
    'Instant',
    '10 sec cooldown',
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false
    }
  ),
  null,
  null,
]
