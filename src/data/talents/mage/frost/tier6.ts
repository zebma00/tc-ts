import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Arctic Bolts',
    'spell_frost_arcticwinds',
    ['Gives your Frostbolt spell a ', '% chance to increase the critical strike damage of your Frostbolt by 10%. This effect stacks up to 5 times.'],
    2,
    [[50, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
  new Talent(
    "Winter's Chill",
    'spell_frost_chillingblast',
    ['Gives your Frost spells a ', "% chance to apply the Winter's Chill effect, which increases the critical strike chance of Frost spells by 2% This effect stacks up to 5 times."],
    5,
    [[20, 40, 60, 80, 100]]
  ),
  null,
]

export default tier6
