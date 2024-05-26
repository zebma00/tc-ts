import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Natural Guardian',
    'ability_druid_kingofthejungle',
    ['When you deal a melee critical strike, you have a ', '% chance to gain 5% armor for 8 sec. This effect stacks up to 5 times.'],
    2,
    [[50, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    'Predatory Strikes',
    'ability_hunter_pet_cat',
    ['Increases your melee attack power while in Bear, Dire Bear or Cat Form by ', '% of your level and increases your spell damage and healing by ', '% of your attack power.'],
    3,
    [
      [50, 100, 150],
      [10, 20, 30],
    ],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    'Primal Fury',
    'ability_racial_cannibalize',
    [
      'Gives you a ',
      '% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points have a ',
      '% chance to add an additional combo point.',
    ],
    2,
    [
      [50, 100],
      [50, 100],
    ],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
]

export default tier4
