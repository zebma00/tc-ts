import { Talent } from '../../Classes';

export default [
  null,
  new Talent(
    'Vengeance',
    'vengeance',
    ['Increases the critical strike damage bonus of your Starfire, Moonfire and Wrath by ', '%.'],
    5,
    [[20, 40, 60, 80, 100]],
    [{ x: 1, y: 1 }]
  ),
  new Talent(
    'Celestial Focus',
    'starfire',
    [
      'Gives you Starfire a ',
      "% chance to stun the target for 3 sec and increases the change you'll resist spell interruption while casting Wrath by ",
      '%.',
    ],
    3,
    [
      [5, 10, 15],
      [25, 50, 75],
    ]
  ),
  null,
];
