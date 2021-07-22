import { Talent } from '../../Classes'

export default [
  new Talent(
    'Surge of Light',
    'surge-of-light',
    ['Your offensive spell criticals have a ', '% chance to heal a nearby party or raid member with low health by 30% of the damage dealt.'],
    2,
    [[25, 50]]
  ),
  new Talent(
    'Spirit of Redemption',
    'spirit-of-redemption',
    [
      'Increases your spirit by 5%. Upon death, the priest becomes the Spirit of Redemption for 10 sec. The Spirit of Redemption cannot attack, be attacked or targeted or move. While in this form the priest can cast any healing spells free of cost. When the effect ends, the priest dies.',
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent('Improved Healing', 'divine-favor', ['Reduces the mana cost of your Lesser Heal, Heal and Greater Heal spells by ', '%.'], 3, [
    [5, 10, 15],
  ]),
  null,
]
