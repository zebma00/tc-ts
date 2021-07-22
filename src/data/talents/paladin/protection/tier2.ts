import { Talent } from '../../Classes'

export default [
  new Talent('Holy Guidance', 'ambush', ['Increases your chance to hit with melee attacks and spells by ', '%.'], 3, [[1, 2, 3]]),
  new Talent(
    "Guardian's Favor",
    'blessing-protection',
    ['Reduces the cooldown of your Blessing of Protection by  ', ' sec and increases the duration of your Blessing of Freedom by ', ' sec.'],
    2,
    [
      [60, 120],
      [3, 6],
    ]
  ),
  null,
  new Talent('Improved Devotion Aura', 'devotion-aura', ['Increases the armor bonus of your Devotion Aura by ', '%.'], 3, [[10, 20, 30]]),
]
