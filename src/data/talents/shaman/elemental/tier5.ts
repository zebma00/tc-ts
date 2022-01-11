import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Elemental Fury',
    'spell_fire_volcano',
    [
      'Increases the critical strike damage bonus of your Searing, Magma and Fire Nova Totems and your Fire, Frost and Nature spells by 100%.',
    ],
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
  new Talent(
    'Lightning Mastery',
    'spell_lightning_lightningbolt01',
    ['Reduces the cast time of your Lightning Bolt and Chain Lightning spells by ', ' sec.'],
    5,
    [[0.2, 0.4, 0.6, 0.8, 1]],
    [{ x: 2, y: 2 }]
  ),
  null,
]
