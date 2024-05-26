import { Talent } from '../../Classes'

export default [
  new Talent(
    'Diligence',
    'spell_shadow_summonimp',
    ['Increases your damage by ', '% and reduces the mana cost of your abilities by ', '% for 15 sec after a one of your traps is triggered.'],
    2,
    [
      [5, 10],
      [15, 30],
    ],
    [{ x: 4, y: 0 }],
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isChanged: false,
      isMoved: false,
      isNew: true,
    }
  ),
  null,
  new Talent('Lightning Reflexes', 'spell_nature_invisibilty', ['Increases your agility by ', '%.'], 5, [[3, 6, 9, 12, 15]]),
  null,
]
