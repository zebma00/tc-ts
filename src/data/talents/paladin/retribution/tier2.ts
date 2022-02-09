import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Judgement', 'spell_holy_righteousfury', ['Decreases the cooldown of your Judgement spell by ', ' sec.'], 2, [
    [1, 2],
  ]),
  new Talent('Deflection', 'ability_parry', ['Increases your parry chance by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  new Talent(
    'Improved Retribution Aura',
    'spell_holy_auraoflight',
    ['Increases the damage done by your Retribution Arua by ', '%.'],
    2,
    [[25, 50]],
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
      isMoved: true,
    }
  ),
  null,
]

export default tier2
