import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent(
    'Booming Voice',
    'spell_nature_purge',
<<<<<<< HEAD
    ['Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by ', '%.'],
    5,
    [[10, 20, 30, 40, 50]]
=======
    ['Increases the area of effect and duration of your Battle Shout, Commanding Shout and Demoralizing Shout by ', '%.'],
    5,
    [[10, 20, 30, 40, 50]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
>>>>>>> 8b33b65 (update talents + item class)
  ),
  new Talent('Cruelty', 'ability_rogue_eviscerate', ['Increases your chance to get a critical strike with melee weapons by ', '%.'], 5, [
    [1, 2, 3, 4, 5],
  ]),
  null,
]

export default tier1
