import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Storm Reach', 'spell_nature_stormreach', ['Increases the range of your Lightning Bolt and Chain Lightning spells by ', ' yards.'], 2, [[3, 6]]),
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
  new Talent('Lightning Mastery', 'spell_lightning_lightningbolt01', ['Reduces the cast time of your Lightning Bolt and Chain Lightning spells by ', ' sec.'], 2, [[0.25, 0.5]], [{ x: 2, y: 2 }], null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
  null,
]

export default tier5
