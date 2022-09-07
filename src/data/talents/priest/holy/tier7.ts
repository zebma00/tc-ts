import { Talent } from '../../Classes'

const tier7 = [
  null,
  new Talent(
    'Lightwell',
    'spell_holy_summonlightwell',
    ['Creates a holy Lightwell on the target location. The Lightwell heals a nearby party member with low health for 330 every 2 sec. Lightwell lasts 12 seconds.'],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    '225 Mana',
    '30 yd range',
    '1.5 sec cast',
    '2 min cooldown',
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
  null,
]

export default tier7
