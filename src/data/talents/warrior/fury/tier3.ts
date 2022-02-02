import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier3 = [
  new Talent('Improved Cleave', 'ability_warrior_cleave', ['Reduces the rage cost of your Cleave ability by ', '.'], 2, [[2, 4]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
=======
export default [
  new Talent(
    'Crushing Blows',
    'ability_warrior_decisivestrike',
    ['Your Slam increases damage dealt by your next Slam by ', '% for 10 sec. This effect stacks up to 3 times.'],
    2,
    [[3, 5]],
    [{ x: 1, y: 0 }],
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
>>>>>>> 8b33b65 (update talents + item class)
  new Talent(
    'Piercing Howl',
    'spell_shadow_deathscream',
    ['Causes enemies within 20 yards of the warrior to be dazed, slowing them by 50% for 6 sec.'],
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
    ['Regenerate ', '% of your total health over 6 sec after being the victim of a critical strike critical strike.'],
    3,
    [[2, 4, 6]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
<<<<<<< HEAD
  new Talent('Improved Battle shout', 'ability_warrior_battleshout', ['Increases the melee attack power bonus of your Battle Shout by ', '%.'], 5, [[5, 10, 15, 20, 25]]),
=======
  new Talent(
    'Improved Battle shout',
    'ability_warrior_battleshout',
    ['Increases the melee attack power bonus of your Battle Shout by ', '%.'],
    5,
    [[5, 10, 15, 20, 25]]
  ),
>>>>>>> 8b33b65 (update talents + item class)
]

export default tier3
