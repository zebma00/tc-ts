import { Talent } from '../../Classes'

const tier5 = [
  null,
  new Talent('Mental Strength', 'spell_nature_enchantarmor', ['Increases your Intellect, Health and Spirit by ', '%.'], 3, [[3, 6, 9]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D2'], {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Divine Spirit', 'spell_holy_divinespirit', ['Holy power infuses the target, increasing their spirit by 17.'], 1, [[]], [{ x: 2, y: 2 }], [{ x: 4, y: 3 }], '70 Mana', '30 yd range', 'Instant', null, ['R1']),
  new Talent(
    'Improved Divine Spirit',
    'spell_holy_prayerofspirit',
    ["Your Divine Spirit and Prayer of Spirit spells also increase the target's spell damage and healing by an amount equal to ", '% of their spirit.'],
    2,
    [[5, 10]],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isMoved: false, isChanged: false }
  ),
]

export default tier5
