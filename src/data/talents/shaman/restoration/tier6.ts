import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Healing Wave',
    'spell_nature_healingwavegreater',
    ['Your Chain Heal has a ', '% chance to reduce the cast time of your next Healing Wave by 1 sec.'],
    2,
    [[15, 30]]
  ),
  null,
  new Talent('Purification', 'spell_frost_wizardmark', ['Increases the effectiveness of your healing spells by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]
