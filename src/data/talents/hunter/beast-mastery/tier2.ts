import { Talent } from '../../Classes'

export default [
  new Talent(
    'Spirit Bond',
    'classic_ability_druid_demoralizingroar',
    ['Increases the damage you and your pet deal by ', '% while within 10 yards of each other.'],
    2,
    [[2, 4]]
  ),
  new Talent('Endurance Training', 'spell_nature_reincarnation', ['Increases the health of your pets by ', '%.'], 3, [[5, 10, 15]]),
  new Talent('Unleashed Fury', 'ability_bullrush', ['Increases the damage done by your pets by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent('Aspect Mastery', 'spell_holy_blessingofagility', ['Increases the effect of your Aspects by ', '%.'], 2, [[10, 20]]),
]
