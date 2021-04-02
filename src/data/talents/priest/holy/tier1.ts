import { Talent } from '../../Classes';

export default [
  null,
  new Talent('Ferocity', 'ferocity', ['Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by ', 'Rage or Energy.'], 5, [[1, 2, 3, 4, 5]]),
  new Talent(
    'Feral Aggression',
    'demoralizing-roar',
    ['Increases the Attack Power reduction of your Demoralizing Roar by ', '% and the damage caused by your Ferocious Bite by ', '%.'],
    5,
    [
      [8, 16, 24, 32, 40],
      [3, 6, 9, 12, 15],
    ]
  ),
  null,
];
