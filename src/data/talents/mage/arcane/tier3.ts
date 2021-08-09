import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Mana Shield',
    'spell_shadow_detectlesserinvisibility',
    ['Decreases the mana lost per point of damage when Mana Shield is active by ', '%.'],
    2,
    [[10, 20]]
  ),
  new Talent(
    'Improved Arcane Explosion',
    'spell_nature_wispsplode',
    ['Increases the critical strike chance of your Arcane Explosion spell by ', '%.'],
    3,
    [[2, 4, 6]]
  ),
  new Talent(
    'Arcane Resilience',
    'spell_arcane_arcaneresilience',
    ['Increases your mana gained from all sources by 30% while below 30% of your total mana.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]
