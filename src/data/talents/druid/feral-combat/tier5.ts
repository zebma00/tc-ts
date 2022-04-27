import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Savage Fury', 'ability_druid_ravage', ['Increases the damage caused by your Claw, Rake, Maul and Swipe abilites by ', '%.'], 2, [[10, 20]]),
  null,
  new Talent('Faerie Fire (Feral)', 'spell_nature_faeriefire', ['Decrease the armor of the target by 175 for 40 sec. While affected, the target cannot stealth or turn invisible.'], 1, [[]]),
  new Talent(
    'Feline Fury',
    'ability_druid_predatoryinstincts',
    ['Your finishing moves in Cat Form have a ', "% chance per combo point to reset the cooldown of your Tiger's Fury."],
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
]

export default tier5
