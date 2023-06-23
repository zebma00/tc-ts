import { Talent } from '../../Classes'

const tier1 = [
  new Talent(
    'Frost Warding',
    'spell_frost_frostward',
    ['Gives your Frost Ward a ', '% chance to reflect frost spells and effects while active and reduces the cooldown of your Frost Ward by ', ' sec.'],
    2,
    [
      [10, 20],
      [5, 10],
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
  new Talent('Improved Frostbolt', 'spell_frost_frostbolt02', ['Reduces the cast time of your Frostbolt spell by ', ' sec.'], 5, [[0.1, 0.2, 0.3, 0.4, 0.5]]),
  new Talent('Elemental Precision', 'spell_ice_magicdamage', ['Reduces the chance that the opponent can resist your Frost and Fire spells by ', '%.'], 3, [[2, 4, 6]]),
  null,
]

export default tier1
