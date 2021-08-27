import { Talent } from '../../Classes'

export default [
  new Talent('Healing Light', 'spell_holy_holybolt', ['Increases the amount healed by your Flash or Light and Holy Light spells by ', '%.'], 3, [
    [4, 8, 12],
  ]),
  new Talent('Aura Mastery', 'spell_holy_auramastery', ['Increases the effect of your Auras by 100% for 15 sec.'], 1, [
    [],
  ],
  [{x: null, y: null}],
  [{x: null, y: null}],
  null,
  null,
  'Instant',
  '2 min cooldown'),
  new Talent(
    'Improved Lay on Hands',
    'spell_holy_layonhands',
    [
      'Gives the target of your Lay on Hands spell a  ',
      '% bonus to their armor value from items for 2 min. In addition, the cooldown of your Lay on hands spell is reduced by 10 min.',
    ],
    5,
    [[3, 6, 9, 12, 15]]
  ),
  new Talent(
    'Unyielding Faith',
    'spell_holy_unyieldingfaith',
    ['Increases your chance to resist Fear and Disorient effect by an additional ', '%.'],
    2,
    [[5, 10]]
  ),
  ,
]
