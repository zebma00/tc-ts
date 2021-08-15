import { Talent } from '../../Classes'

export default [
  new Talent('Improved Berserker Rage', 'spell_nature_ancestralguardian', ['Berserker Rage generates ', ' rage when used.'], 2, [[5, 10]]),
  null,
  new Talent(
    'Flurry',
    'ability_ghoulfrenzy',
    ['Increases your attack speed by ', '% for your next 3 swings after dealing a melee critical strike.'],
    5,
    [[10, 20, 30, 40, 50]],
    [{ x: 3, y: 2 }]
  ),
  null,
]
