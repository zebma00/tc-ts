import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Healing Light', 'spell_holy_holybolt', ['Increases the amount healed by your Flash or Light and Holy Light spells by ', '%.'], 3, [[4, 8, 12]]),
  new Talent(
    'Aura Mastery',
    'spell_holy_auramastery',
    ['Causes your Concentration Aura to make all affected targets immune to Silence and Interrupt effects and increases the effect of all other auras by 100%. Lasts 6 sec.'],
    1,
    [[]],
    null,
    null,
    'Instant',
    '2 min cooldown',
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent('Improved Lay on Hands', 'spell_holy_layonhands', ['Gives the target of your Lay on Hands spell a  ', '% bonus to their armor value from items for 2 min. In addition, the cooldown of your Lay on hands spell is reduced by 10 min.'], 2, [
    [15, 30],
  ]),
  new Talent('Unyielding Faith', 'spell_holy_unyieldingfaith', ['Increases your chance to resist Fear and Disorient effect by an additional ', '%.'], 2, [[5, 10]]),
]

export default tier3
