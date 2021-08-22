import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Healing Wave', 'spell_nature_magicimmunity', ['Reduces the casting time of your Healing Wave spell by ', ' sec.'], 5, [
    [0.1, 0.2, 0.3, 0.4, 0.5],
  ]),
  new Talent('Totemic Focus', 'spell_nature_moonglow', ['Reduces the mana cost of your totems by ', '%.'], 5, [[5, 10, 15, 20, 25]]),
  null,
]
