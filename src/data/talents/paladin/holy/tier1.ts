import { Talent } from '../../Classes'

export default [
	null,
	new Talent('Divine Strength', 'ability_golemthunderclap', ['Increases your Strength by ', '%.'], 5, [
		[2, 4, 6, 8, 10],
	]),
	new Talent('Divine Intellect', 'spell_nature_sleep', ['Increases your total Intellect by ', '%.'], 5, [
		[2, 4, 6, 8, 10],
	]),
	null,
]
