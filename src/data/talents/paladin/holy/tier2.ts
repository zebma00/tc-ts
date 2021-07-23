import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Spiritual Focus',
    'blink',
    ['Gives your Flash or Light and Holy Light spells a ', '% chance to not lose casting time when you take damage.'],
    5,
    [[14, 28, 42, 56, 70]]
  ),
  new Talent(
    'Improved Seal of Righteousness',
    'seal-righteousness',
    ['Increases the damage done by your Seal of Righteousness and Judgement of Righeousness by ', '%.'],
    5,
    [[3, 6, 9, 12, 15]]
  ),
  null,
]
