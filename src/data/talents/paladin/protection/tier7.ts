import { Talent } from '../../Classes'

const tier7 = [
  null,
  new Talent(
    "Avenger's Shield",
    'spell_holy_avengersshield',
    ['Hurls a holy shield at the enemy, dealing Holy damage, Dazing them and then jumping to additional nearby enemies. Affects 3 total targets. Lasts 10 sec.'],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    '26% of base Mana',
    '30 yd range',
    'Instant',
    '30 sec cooldown',
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier7
