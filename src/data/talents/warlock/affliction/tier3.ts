import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Damnation',
    'spell_shadow_curseofsargeras',
    ['Increases the damage done by your Curse of Agony by ', '% and increases the effect of your Curse of Weakness by ', '%.'],
    3,
    [
      [2, 4, 6],
      [1, 2, 3],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent('Fel Concentration', 'spell_shadow_fingerofdeath', ['Gives you a ', '% chance to avoid interruption caused by damage while casting Drain Life, Drain Mana and Drain Soul spells.'], 5, [
    [14, 28, 42, 56, 70],
  ]),
  new Talent(
    'Amplify Curse',
    'spell_shadow_contagion',
    ['Increases the effect of your next Curse of Weakness or Curse of Agony by 50% or your next Curse of Exhaustion by 20%. Lasts 30 sec.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    'Instant',
    '3 min cooldown',
    ['D2']
  ),
  null,
]

export default tier3
