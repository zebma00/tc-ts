import { Talent } from '../../Classes'

const tier6 = [
  new Talent('Revitalize', 'ability_druid_empoweredrejuvination', ['Your Rejuvenation and Regrowth spells have a ', '% chance to restore 8 Energy, 4 Rage or 1% Mana per tick.'], 3, [[5, 10, 15]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent(
    'Improved Innervate',
    'spell_nature_lightning',
    ['When cast on self, the duration of your Innervate is increased by ', ' sec. When cast on another target, you also gain an Innervate effect for ', ' sec.'],
    2,
    [
      [5, 10],
      [5, 10],
    ],
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
