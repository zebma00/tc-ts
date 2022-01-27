import { Talent } from '../../Classes'

export default [
  new Talent('Improved Judgement', 'spell_holy_righteousfury', ['Decreases the cooldown of your Judgement spell by ', 'sec.'], 2, [[1, 2]]),
  new Talent(
    'Improved Seal of the Crusader',
    'spell_holy_holysmite',
    [
      'In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all attacks made against that target by an additional ',
      '%.',
    ],
    3,
    [[1, 2, 3]],
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
      isMoved: false
    }
  ),
  new Talent('Deflection', 'ability_parry', ['Increases your parry chance by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  new Talent('Improved Retribution Aura', 'spell_holy_auraoflight', ['Increases the damage done by your Retribution Arua by ', '%.'], 2, [[25, 50]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true
    }
  ),
]
