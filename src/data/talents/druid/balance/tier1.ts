import { Talent } from '../../Classes'

const tier1 = [
  new Talent(
    'Improved Wrath',
    'spell_nature_abolishmagic',
    ['Reduces the cast time of your Wrath spell by ', " sec and increases the chance you'll resist spell interruption when casting Wrath by ", '%.'],
    5,
    [
      [0.1, 0.2, 0.3, 0.4, 0.5],
      [15, 30, 45, 60, 75],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent(
    "Nature's Grasp",
    'spell_nature_natureswrath',
    ['While active, any time an enemy hits the caster they have a 35% chance to become afflicted by Entangling Roots. Only usable outdoors. 1 charge. Lasts 45 sec. '],
    1,
    [[1]],
    [{ x: null, y: null }],
    [{ x: 0, y: 2 }],
    '50 Mana',
    null,
    'Instant',
    '1 min cooldown',
    ['R1']
  ),
  new Talent("Improved Nature's Grasp", 'spell_nature_natureswrath', ["Increases the chance for your Nature's Grasp to entangle an enemy by ", '%.'], 4, [[15, 30, 45, 65]], [{ x: 0, y: 1 }]),
  null,
]

export default tier1
