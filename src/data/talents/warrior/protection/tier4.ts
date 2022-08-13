import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Improved Sunder Armor', 'ability_warrior_sunder', ['Reduces the cost of your Sunder Armor by ', ' rage point.'], 3, [[1, 2, 3]]),
  new Talent('Improved Disarm', 'ability_warrior_disarm', ['Increases the duration of your Disarm ability by ', ' sec.'], 3, [[1, 2, 3]]),
  new Talent('Improved Taunt', 'spell_nature_reincarnation', ['Reduces the cooldown of your Taunt ability by ', ' sec.'], 2, [[1, 2]]),
  new Talent('Focused Rage', 'ability_warrior_focusedrage', ['Generate ', ' rage every 1 second while in combat, until you have 10 rage'], 2, [[1, 2]], null, null, null, null, null, null, null, {
    isNew: true,
    isMoved: false,
    isChanged: false,
  }),
]

export default tier4
