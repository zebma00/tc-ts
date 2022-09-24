import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Fel Protection',
    'spell_shadow_demonictactics',
    ['Increases the armor rating of your active demon by ', '% and reduces area of effect damage taken by your active demon ', '%.'],
    3,
    [
      [10, 20, 30],
      [20, 40, 60],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent(
    'Demonic Sacrifice',
    'spell_shadow_psychicscream',
    [
      <>
        Sacrifices your demon to get an effect that lasts 30 min. Any demon summoned cancels the effect. <br />
        <br /> Imp: increases your Fire damage by 15%. <br />
        <br /> Void Walker: reduces physical damage you take by 15%.
        <br />
        <br />
        Succubus: increases your Shadow damage 15%. <br />
        <br />
        Felhunter: Increases your healing received by 15%.
      </>,
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
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
  null,
]

export default tier5
