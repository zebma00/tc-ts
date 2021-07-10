import { Talent } from '../../Classes'

export default [
  new Talent(
    'Feral Instinct',
    'shadowmeld',
    ['Increases threat caused in Bear and Dire Bear Form by ', '% and reduces the chance enemies have to detect you while Prowling.'],
    3,
    [[5, 10, 15]]
  ),
  new Talent('Brutal Impact', 'bash', ['Increases the stun duration of your Bash and Pounce abilites by ', 'sec.'], 2, [[0.5, 1]]),
  new Talent('Thick Hide', 'thick-hide', ['Increases your Armor contribution from items by ', '%'], 3, [[4, 7, 10]]),
  new Talent(
    'Feline Fury',
    'feline-fury',
    ['Your finishing moves in Cat Form have a ', "% chance per combo point to reset the cooldown of your Tiger's Fury."],
    2,
    [[5, 10]]
  ),
]
