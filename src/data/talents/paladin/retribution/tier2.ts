import { Talent } from '../../Classes'

export default [
  new Talent('Improved Judgement', 'judgement', ['Decreases the cooldown of your Judgement spell by ', 'sec.'], 2, [[1, 2]]),
  new Talent(
    'Improved Seal of the Crusader',
    'smite',
    [
      'In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all attacks made against that target by an additional ',
      '%.',
    ],
    3,
    [[1, 2, 3]]
  ),
  new Talent('Deflection', 'deflection', ['Increases your parry chance by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  new Talent('Improved Retribution Aura', 'retribution-aura', ['Increases the damage done by your Retribution Arua by ', '%.'], 2, [[25, 50]]),
]
