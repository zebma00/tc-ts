import { Talent } from '../../Classes'

const tier6 = [
  null,
  null,
  new Talent(
    'Overload',
    'spell_nature_lightningoverload',
    ['Gives your Lightning Bolt, Chain Lightning, Chain Heal and Healing Wave spells a ', '% chance to cast a second, similar spell on the same target at no additional cost that causes half damage or healing and no threat.'],
    2,
    [[5, 10, 15, 20, 25]],
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
  null,
]

export default tier6
