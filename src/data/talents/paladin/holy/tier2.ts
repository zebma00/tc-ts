import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Spiritual Focus',
    'spell_arcane_blink',
    ['Gives your Flash or Light and Holy Light spells a ', '% chance to not lose casting time when you take damage.'],
    3,
    [[23, 47, 70]]
  ),
  new Talent(
    'Improved Seal of Righteousness',
    'ability_thunderbolt',
    ['Increases the damage done by your Seal of Righteousness and Judgement of Righeousness by ', '%.'],
    5,
    [[3, 6, 9, 12, 15]]
  ),
  null,
]
