import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Arctic Reach', 'spell_shadow_darkritual', ['Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by ', '%.'], 2, [
    [10, 20],
  ]),
  new Talent('Frost Channeling', 'spell_frost_stun', ['Reduces the mana cost of your Frost Spells by ', '% and reduces the threat generated by your Frost spells by ', '%.'], 3, [
    [5, 10, 15],
    [10, 20, 30],
  ]),
  new Talent(
    'Elemental Volatility',
    'ability_dualwieldspecialization',
    [
      'Critical strikes from your Frost spells increase the critical strike chance of your next two Fire spell by ',
      '%. This effect stacks up to 3 times and lasts 30 sec or when you have caused two critical strikes with a Fire spell.',
    ],
    2,
    [[5, 10]],
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
]

export default tier4
