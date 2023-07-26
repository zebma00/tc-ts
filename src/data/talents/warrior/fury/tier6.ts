import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Victorious Surge',
    'spell_nature_shamanrage',
    ['After you or a nearby party member kills a target that yields experience or honor, you gain ', ' rage and ', '% of your missing health.'],
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
  new Talent('Flurry', 'ability_ghoulfrenzy', ['Increases your attack speed by ', '% for your next 3 swings after dealing a melee critical strike.'], 5, [[10, 20, 30, 40, 50]], [{ x: 3, y: 2 }]),
  null,
]

export default tier6
