import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Fade', 'fade', ['Reduces the cooldown of your Fade spell by ', ' sec.'], 2, [[3, 6]]),
  new Talent('Shadow Reach', 'shadow-reach', ['Increases the range of your Shadow damage spells by ', '%.'], 3, [[6, 13, 20]]),
  new Talent(
    'Shadow Weaving',
    'shadow-weaving',
    [
      'Your Shadow damage spells have a ',
      '% ge spells have a 20/40/60/80/100% chance to cause the target to become vulnerable to Shadow damage, increasing Shadow damage taken by 3%. This effect stacks up to 5 sec. Lasts 15 sec.',
    ],
    5,
    [[20, 40, 60, 80, 100]]
  ),
]
