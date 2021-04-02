import { Talent } from '../../Classes';

export default [
  new Talent(
    'Feral Instinct',
    'shadowmeld',
    ['Increases threat caused in Bear and Dire Bear Form by ', '% and reduces the chance enemies have to detect you while Prowling.'],
    5,
    [[3, 6, 9, 12, 15]]
  ),
  new Talent('Brutal Impact', 'bash', ['Increases the stun duration of your Bash and Pounce abilites by ', 'sec.'], 2, [[0.5, 1]]),
  new Talent('Thick Hide', 'thick-hide', ['Increases your Armor contribution from items by ', '%'], 5, [[2, 4, 6, 8, 10]]),
  new Talent(
    'Feral Focus',
    'thick-hide',
    [
      'Your damaging abilities in Cat, Bear and Dire Bear Form increase your spell damage and healing by ',
      '% for 15 seconds. This effect stacks up to 3 times.',
    ],
    3,
    [[10, 20, 30]]
  ),
];
