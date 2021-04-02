import { Talent } from '../../Classes';

export default [
  null,
  new Talent(
    'Improved Mark of the Wild',
    'mark-of-the-wild',
    ['Increases the effects of your Mark of the Wild and Gift of the Wild spells by ', '%.'],
    5,
    [[7, 14, 21, 28, 35]]
  ),
  new Talent(
    'Furor',
    'furor',
    ['Gives you a ', 'chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.'],
    5,
    [[20, 40, 60, 80, 100]]
  ),
  null,
];
