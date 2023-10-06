import { Talent } from '../../Classes'

const tier5 = [
  null,
  new Talent('Mental Strength', 'spell_nature_enchantarmor', ['Increases your maximum Mana by ', '%.'], 5, [[2, 4, 6, 8, 10]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D2']),
  new Talent('Divine Spirit', 'spell_holy_divinespirit', ['Holy power infuses the target, increasing their spirit by 17.'], 1, [[]], [{ x: 2, y: 2 }], null, '70 Mana', '30 yd range', 'Instant'),
  null,
]

export default tier5
