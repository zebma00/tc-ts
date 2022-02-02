import { Talent } from '../../Classes'

export default [
  null,
  null,
  new Talent(
    'Unleashed Elements',
    'spell_nature_elementalprecision_1',
    [
      "Causes your critical hits from offensive spells to increase all party members' casting speed by ",
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
