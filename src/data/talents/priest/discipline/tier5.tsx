import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Devotion',
    'spell_frost_manarecharge',
    [
      <>
        Modifies one of your Priest racial abilities. <br />
        <br /> Human: Allows Feedback to be cast on friendly target within 30 yard range. <br />
        <br /> Dwarf: Chastise now heals you for 50% of the damage dealt. <br />
        <br /> Night Elf: Starshards now stuns the target for 2 sec after the final hit. <br />
        <br /> Troll: Allows Shadowguard to be cast on friendly targets within 30 yard range. Only one target can be affected at a time. <br />
        <br /> Undead: Increases the damage of Devouring Plague by 100% on targets below 30% health.
        <br />
      </>,
    ],
    1,
    [[0]],
    [{ x: null, y: null }],
    [{ x: 5, y: 0 }],
    null,
    null,
    null,
    null,
    ['D1'],
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent('Mental Strength', 'spell_nature_enchantarmor', ['Increases your Intellect, Health and Spirit by ', '%.'], 3, [[3, 6, 9]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D2'], {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Divine Spirit', 'spell_holy_divinespirit', ['Holy power infuses the target, increasing their spirit by 17.'], 1, [[]], [{ x: 2, y: 2 }], null, '70 Mana', '30 yd range', 'Instant'),
  null,
]

export default tier5
