import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Storm Reach',
    'spell_nature_stormreach',
    ['Increases the range of your Lightning Bolt and Chain Lightning spells by ', ' yards. In addition, reduces the damage penalty from your Chain Lightning on multiple targets by ', '%.'],
    2,
    [
      [3, 6],
      [50, 100],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    'Elemental Fury',
    'spell_fire_volcano',
    ['Increases the critical strike damage bonus of your Searing, Magma and Fire Nova Totems and your Fire, Frost and Nature spells by 100%.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
  new Talent(
    'Static Charge',
    'spell_shaman_staticshock',
    ['Your Lightning spells increase the critical strike chance of all spells made against the target by ', '%. This effect lasts 12 sec.'],
    3,
    [[1, 2, 3]],
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
