import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Consumed by Rage', 'spell_nature_shamanrage', ['Enrages you and grants you a ', '% melee damage bonus for 12 sec or up to a maximum of 12 swings after you exceed 80 Rage.'], 2, [[5, 10]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent(
    'Improved Disarm',
    'ability_warrior_disarm',
    ['Increases the duration by ', ' sec and reduces the duration of disarm effects on you by ', '%'],
    3,
    [
      [1, 2, 3],
      [25, 50, 75],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Improved Taunt', 'spell_nature_reincarnation', ['Reduces the cooldown of your Taunt ability by ', ' sec.'], 2, [[1, 2]]),
  null,
]

export default tier4
