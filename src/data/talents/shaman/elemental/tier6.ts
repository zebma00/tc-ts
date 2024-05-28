import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Elemental Impact',
    'spell_nature_unrelentingstorm',
    ['Your critical strikes from direct damage spells increase the damage of the next direct damage spell taken by the target by ', '%'],
    3,
    [[5, 10, 15]],
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
  new Talent(
    'Overload',
    'spell_nature_lightningoverload',
    ['Gives your Lightning Bolt, Chain Lightning, Chain Heal and Healing Wave spells a ', '% chance to cast a second, similar spell on the same target at no additional cost that causes half damage or healing and no threat.'],
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
  null,
]

export default tier6
