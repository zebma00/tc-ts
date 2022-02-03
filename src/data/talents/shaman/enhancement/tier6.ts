import { Talent } from '../../Classes'

const tier6 = [
  null,
  null,
  new Talent(
    'Unleashed Rage',
    'spell_nature_unleashedrage',
    [
      "Causes your critical hits with melee attacks to increase all party members' attack speed by ",
      '% if within 20 yards of the Shaman. Lasts 10 sec.',
    ],
    5,
    [[2, 4, 6, 8, 10]],
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
  null,
]

export default tier6
