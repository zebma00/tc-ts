import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Furious Outburst',
    'ability_hunter_harass',
    ['Increases the effect of your active Battle Shout and Demoralizing Roar by ', '% for 6 sec after scoring a critical hit. 12 sec cooldown.'],
    2,
    [[25, 50]],
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
