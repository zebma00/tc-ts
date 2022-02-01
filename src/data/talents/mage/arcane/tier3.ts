import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Dampen Magic',
    'spell_nature_abolishmagic',
    ['Increases your chance to resist spells by ', '% while Dampen Magic is active.'],
    2,
    [[2, 4]],
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
    'Improved Arcane Explosion',
    'spell_nature_wispsplode',
    ['Increases the critical strike chance of your Arcane Explosion spell by ', '%.'],
    3,
    [[2, 4, 6]]
  ),
  new Talent(
    'Arcane Resilience',
    'spell_arcane_arcaneresilience',
    ['Increases your armor by 50% of your intellect.'],
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
