import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Living Seed',
    'ability_druid_empoweredrejuvination',
    ['Causes your Rejuvenation and Regrowth spells to apply the Living Seed effect. The Living Seed effect Increases healing received by the target by ', '%. This effect does not stack.'],
    2,
    [[5, 10]],
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
  new Talent('Improved Regrowth', 'spell_nature_resistnature', ['Increases the critical effect chance of your Regrowth spell by ', '%.'], 5, [[10, 20, 30, 40, 50]]),
  null,
]

export default tier6
