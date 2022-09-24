import { Talent } from '../../Classes'

const tier6 = [
  null,
  null,
  new Talent(
    'Master Demonologist',
    'spell_shadow_shadowpact',
    [
      <>
        Gives the Warlock and the summoned Demon an effect as long as the Demon is active.
        <br />
        <br />
        Imp: increases Fire damage by{' '}
      </>,
      <>
        %. <br />
        <br />
        Void Walker: reduces physical damage taken by{' '}
      </>,
      <>
        %. <br />
        <br />
        Succubus: increases Shadow damage by{' '}
      </>,
      <>
        %. <br />
        <br />
        Felhunter: increases healing received by{' '}
      </>,
      '%.',
    ],
    5,
    [
      [2, 4, 6, 8, 10],
      [2, 4, 6, 8, 10],
      [2, 4, 6, 8, 10],
      [2, 4, 6, 8, 10],
    ],
    [{ x: 3, y: 2 }],
    [{ x: 6, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
]

export default tier6
