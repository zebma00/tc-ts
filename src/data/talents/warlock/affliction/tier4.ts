import { Talent } from '../../Classes'

export default [
  new Talent('Grim Reach', 'evocation', ['Increases the range of your Affliction spells by ', '%.'], 2, [[10, 20]]),
  new Talent(
    'Nightfall',
    'starfire',
    [
      'Gives your Corruption and Drain Life spells a ',
      '% chance to cause you to enter a Shadow Trance state after damaging an opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.',
    ],
    2,
    [[2, 4]]
  ),
  null,
  new Talent('Improved Drain Mana', 'evocation', ['Causes ', '% of the Mana drained by your Drain Mana spell to drain health as well.'], 2, [
    [15, 30],
  ]),
]
