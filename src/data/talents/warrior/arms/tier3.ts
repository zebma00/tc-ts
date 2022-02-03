import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Improved Overpower', 'inv_sword_05', ['Increases the critical strike chance of your Overpower by ', '%.'], 2, [[25, 50]]),
  new Talent(
    'Anger Management',
    'spell_holy_blessingofstamina',
    ['Increases the time required for your rage to decay while out of combat by 30%.'],
    1,
    [[1]],
    [{ x: 1, y: 1 }],
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent(
    'Deep Wounds',
    'ability_backstab',
    ['Your critical strikes cause the target to bleed, dealing ', "% of your melee weapon's average damage over 12 sec."],
    3,
    [[20, 40, 60]],
    [{ x: 0, y: 2 }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  null,
]

export default tier3
