import { Talent } from '../../Classes'

export default [
  new Talent('Fel Protection', 'spell_shadow_demonictactics', ['Increases the armor rating of your Demon by ', '% and reduces area of effect damage taken by your demon ', '%.'], 3, [
    [10,20,30],[20, 40, 60],
  ],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  { isNew: true,
    isChanged: false,
    isMoved: false
  }
  ),
  new Talent(
    'Demonic Sacrifice',
    'spell_shadow_psychicscream',
    [
      'Sacrifices your demon to get an effect that lasts 30 min. Any demon summoned cancels the effect. Imp: increases your Fire damage by 15%. Void Walker: reduces threat caused by your damaging spells by 30%. Succubus: increases your Shadow damage 15%. Felhunter: increases Health and Mana received from all sources by 15%.',
    ],
    1,
    [[]],
    null,
    [{ x: 6, y: 1 }],
    '100 yd range',
    null,
    'Instant',
    null,
    ['D2'],
    { isNew: false,
      isChanged: true,
      isMoved: false
    }
  ),
  null,
  null,
]
