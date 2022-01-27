import { Talent } from '../../Classes'

export default [
  new Talent(
    'Blood Frenzy',
    'ability_warrior_bloodfrenzy',
    ['Your Rend and Deep Wounds abilities also increase all physical damage caused to that target by ', '%.'],
    2,
    [[2, 4]],
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
      isMoved: false
    }
  ),
  null,
  new Talent(
    'Weapon Mastery',
    'ability_warrior_weaponmastery',
    ['Increases your weapon skill by ', ' and reduces the duration of all Disarm effect used against you by ', '%. This does not stack with other Disarm duration reducing effects.'],
    2,
    [[3, 5], [25, 50]],
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
      isMoved: false
    }
  ),
  null,
]
