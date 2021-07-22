import { Talent } from '../../Classes'

export default [
  new Talent(
    'Blessing of Kings',
    'blessing-kings',
    [
      'Places a Blessing on the friendly target, increasing total stats by 10% for 5 min. Players may only have one Blessing on them per Paladin at any one time.',
    ],
    1,
    [[]],
    null,
    null,
    '8% of base mana',
    '30 yd range',
    'Instant'
  ),
  new Talent('Improved Righteous Fury', 'righteousness', ['Increases the amount of threat generated bu your Righteous Fury spell by .', '%'], 3, [
    [20, 40, 60],
  ]),
  new Talent(
    'Shield Specialization',
    'shield-spec',
    ['Increases the amount of damage absorbed by your shield by ', '%.'],
    3,
    [[10, 20, 30]],
    [{ x: 0, y: 2 }]
  ),
  new Talent(
    'Divine Purpose',
    'divine-purpose',
    ['While your Righteous Fury is active, generate ', '% additional threat on enemies that are stunned or incapacitated.'],
    3,
    [[10, 20, 30]]
  ),
  ,
]
