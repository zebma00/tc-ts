import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier6 = [
  null,
  new Talent(
    "Improved Nature's Grace",
    'spell_nature_naturesblessing',
    ["When you gain the Nature's Grace effect, party members within 30 yards have a ", "% chance to gain the Nature's Grace effect as well."],
    2,
    [[50, 100]],
    [{ x: 4, y: 1 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    'Moonfury',
    'spell_nature_moonglow',
    ['Increases the damage and critical strike chance of your Starfire, Moonfire and Wrath spells by ', '%.'],
    3,
    [[2, 4, 6]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
=======
export default [
	null,
	new Talent(
		'Moonfury',
		'spell_nature_moonglow',
		['Increases the damage done by your Starfire, Moonfire and Wrath spells by ', '%.'],
		5,
		[[2, 4, 6, 8, 10]],
		[{ x: 4, y: 1 }]
	),
	null,
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier6
