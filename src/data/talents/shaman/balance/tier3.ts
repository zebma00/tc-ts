import { Talent } from '../../Classes';

export default [
  new Talent('Improved Thorns', 'thorns', ['Increases the damage caused by your Thorns spell by ', '%.'], 3, [[25, 50, 75]]),
  null,
  new Talent(
    'Omen of Clarity',
    'omen-of-clarity',
    [
      'Imbues the druid with natural energy. Each of the druids melee attacks has a chance of causing the caster to enter a clearcasting state. The clearcasting state reduces the Rage, Mana or Energy cost of your next damage or healing spell or offensive ability by 100%. Lasts 10 min.',
    ],
    1,
    [[1]],
    [{ x: 1, y: 2 }]
  ),
  new Talent(
    "Nature's Reach",
    'natures-reach',
    ['Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire and Hurricane spells by ', '%.'],
    2,
    [[10, 20]]
  ),
];
