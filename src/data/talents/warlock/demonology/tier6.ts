import { Talent } from '../../Classes'

const tier6 = [
  null,
  null,
  new Talent(
    'Master Demonologist',
    'spell_shadow_shadowpact',
    [
      'Gives the Warlock and the summoned Demon an effect as long as the Demon is active. Imp: Increases Fire damage by ',
      '%. Void Walker: reduces physical damage taken by ',
      '%. Succubus: increases Shadow damage by ',
      '%. Felhunter: Increases healing received by ',
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
    ['D1']
  ),
  null,
]

export default tier6
