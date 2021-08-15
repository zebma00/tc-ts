import { Talent } from '../../Classes'

export default [
  new Talent('Improved Cleave', 'ability_warrior_cleave', ['Increases the damage done by your Cleave ability by ', '%'], 3, [[40, 80, 120]]),
  new Talent(
    'Piercing Howl',
    'spell_shadow_deathscream',
    ['Causing enemies within 20 yards of the warrior to be dazed, slowing them by 50% for 6 sec.'],
    1,
    [[]],
    null,
    null,
    '10 Rage',
    null,
    'Instant'
  ),
  new Talent(
    'Blood Craze',
    'spell_shadow_summonimp',
    ['Regenerate ', '% of your total health over 6 sec after being the victim of a critical strike or dealing a critical strike.'],
    3,
    [[1, 2, 3]]
  ),
  new Talent('Improved Battle shout', 'ability_warrior_battleshout', ['Increases the melee attack power bonus of your Battle Shout by ', '%.'], 5, [
    [5, 10, 15, 20, 25],
  ]),
]
