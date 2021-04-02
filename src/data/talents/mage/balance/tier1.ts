import { Talent } from '../../Classes';

export default [
  new Talent('Improved Wrath', 'wrath', ['Reduces the cast time of your Wrath spell by', ' sec.'], 5, [[0.1, 0.2, 0.3, 0.4, 0.5]]),
  new Talent(
    "Nature's Grasp",
    'natures-grasp',
    [
      'While active, any time an enemy hits the caster they have a 35% chance to become afflicted by Entangling Roots. Only usable outdoors. 1 charge. Lasts 45 sec. ',
    ],
    1,
    [[1]],
    [{ x: null, y: null }],
    [{ x: 0, y: 2 }]
  ),
  new Talent(
    "Improved Nature's Grasp",
    'natures-grasp',
    ["Increases the chance for your Nature's Grasp to entangle an enemy by ", '%.'],
    4,
    [[15, 30, 45, 65]],
    [{ x: 0, y: 1 }],
    [{ x: null, y: null }]
  ),
  null,
];
