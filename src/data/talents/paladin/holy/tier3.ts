import { Talent } from '../../Classes'

export default [
  new Talent('Healing Light', 'holy-light', ['Increases the amount healed by your Flash or Light and Holy Light spells by ', '%.'], 3, [[4, 8, 12]]),
  new Talent(
    'Consecration',
    'consecration',
    ['Consecrates the land beneah the Paladin, doing 64 Holy damage over 8 sec to enemies who enter the area.'],
    1,
    [[1]],
    null,
    null,
    '135 Mana',
    null,
    'Instant',
    '8 sec cooldown'
  ),
  new Talent(
    'Improved Lay on Hands',
    'lay-on-hands',
    [
      'Gives the target of your Lay on Hands spell a  ',
      '% bonus to their armor value from items for 2 min. In addition, the cooldown of your Lay on hands spell is reduced by 10 min.',
    ],
    5,
    [[3, 6, 9, 12, 15]]
  ),
  new Talent('Unyielding Faith', 'unyielding-faith', ['Increases your chance to ressit Fear and Disorient effect by an additional ', '%.'], 2, [
    [5, 10],
  ]),
  ,
]
