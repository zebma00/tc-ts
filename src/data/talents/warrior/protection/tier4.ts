import { Talent } from '../../Classes'

export default [
  new Talent('Improved Sunder Armor', 'ability_warrior_sunder', ['Reduces the cost of your Sunder Armor by ', '%.'], 3, [[1, 2, 3]]),
  new Talent('Improved Disarm', 'ability_warrior_disarm', ['Increases the duration of your Disarm ability by', ' sec.'], 3, [[1, 2, 3]]),
  new Talent('Improved Taunt', 'spell_nature_reincarnation', ['Reduces the cooldown of your Taunt ability by ', ' sec.'], 2, [[1, 2]]),
  new Talent('Improved Shield Bash', 'ability_warrior_shieldbash', ['Gives your Shield Bash a ', '% chance to silence the target for 2 sec.'], 2, [
    [50, 100],
  ]),
]
