import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Blessing of Kings',
    'spell_magic_magearmor',
    ['Places a Blessing on the friendly target, increasing total stats by 10% for 5 min. Players may only have one Blessing on them per Paladin at any one time.'],
    1,
    [[]],
    null,
    null,
    '8% of base mana',
    '30 yd range',
    'Instant'
  ),
  new Talent(
    'Improved Righteous Fury',
    'spell_holy_sealoffury',
    ['Increases the amount of threat generated bu your Righteous Fury spell by ', '%.'],
    3,
    [[25, 50, 75]],

    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Shield Specialization', 'inv_shield_06', ['Increases the amount of damage absorbed by your shield by ', '%.'], 3, [[10, 20, 30]], [{ x: 0, y: 2 }]),
  new Talent(
    'Divine Purpose',
    'spell_holy_divinepurpose',
    ['Increases the Holy damage you deal to enemies that are stunned or incapacitated by ', '%.'],
    2,
    [[15, 30]],
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
]

export default tier3
