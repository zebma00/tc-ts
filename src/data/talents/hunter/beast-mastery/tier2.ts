import { Talent } from '../../Classes'

export default [
  new Talent(
    'Spirit Bond',
    'classic_ability_druid_demoralizingroar',
    ['Increases the damage you and your pet deal by ', '% while within 10 yards of each other.'],
    2,
    [[2, 4]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false,
      isChanged: true,
      isMoved: true
    }
  ),
  new Talent('Endurance Training', 'spell_nature_reincarnation', ['Increases the health of your pets by ', '%.'], 3, [[5, 10, 15]],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  { isNew: false,
    isChanged: true,
    isMoved: true
  }
  ),
  new Talent('Unleashed Fury', 'ability_bullrush', ['Increases the damage done by your pets by ', '%.'], 5, [[4, 8, 12, 16, 20]],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  { isNew: false,
    isChanged: false,
    isMoved: true
  }
  ),
  new Talent('Aspect Mastery', 'spell_holy_blessingofagility', ['Increases the effect of your Aspects by ', '%.'], 2, [[10, 20]],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  { isNew: true,
    isChanged: false,
    isMoved: false
  }
  ),
]
