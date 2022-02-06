import { Talent } from '../../Classes'

export default [
  new Talent(
    'Pathfinding',
    'ability_mount_jungletiger',
    ['Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ', '%'],
    2,
    [[3, 6]]
  ),
  new Talent('Bestial Swiftness', 'ability_druid_dash', ['Increases the outdoor movement speed of your pets by 30%.'], 1, [[]]),
  new Talent('Unleashed Fury', 'ability_bullrush', ['Increases the damage done by your pets by ', '%.'], 5, [[4, 8, 12, 16, 20]]),
  new Talent(
    'Aspect Mastery',
    'spell_holy_blessingofagility',
    ['Increases the effect of your Aspects by ', '%.'],
    2,
    [[10, 20]],
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
