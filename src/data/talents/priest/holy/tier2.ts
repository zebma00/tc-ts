import { Talent } from '../../Classes'

export default [
  new Talent('Spiritual Guidance', 'spell_holy_spiritualguidence', ['Increases healing and spell damage by ', '% of your total Spirit.'], 5, [
    [3, 6, 9, 12, 15],
  ],
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
  new Talent('Improved Renew', 'spell_holy_renew', ['Increases the amount healed by your Renew spell by ', '%.'], 3, [[5, 10, 15]],
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
  new Talent(
    'Divine Fury',
    'spell_holy_sealofwrath',
    ['Reduces the casting time of your Heal, Greater Heal, Smite and Holy Fire spells by ', '%.'],
    5,
    [[0.1, 0.2, 0.3, 0.4, 0.5]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  null,
]
