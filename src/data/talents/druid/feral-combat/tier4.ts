import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Improved Shred', 'spell_shadow_vampiricaura', ['Reduces the Energy cost of your Shred ability by ', '.'], 2, [[6, 12]]),
  new Talent(
    'Predatory Strikes',
    'ability_hunter_pet_cat',
    ['Increases your melee attack power while shapeshifted by ', '% of your level.'],
    3,
    [
      [50, 100, 150],
      [20, 40, 60],
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
  new Talent(
    'Natural Guardian',
    'ability_druid_kingofthejungle',
    ['Whenever a damaging attack brings you below 30% health, your maximum health is increased by ', '% for 10 sec. 1 minute cooldown.'],
    2,
    [[10, 20]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
]

export default tier4
