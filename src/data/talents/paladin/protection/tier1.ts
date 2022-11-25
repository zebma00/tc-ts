import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent('Improved Devotion Aura', 'spell_holy_devotionaura', ['Increases the armor bonus of your Devotion Aura by ', '%.'], 5, [[8, 16, 24, 32, 40]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent(
    'Redoubt',
    'ability_defend',
    ['Increases your chance to block by ', '% after being the victim of a critical strike. Lasts 10 sec or 5 blocks.'],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]

export default tier1
