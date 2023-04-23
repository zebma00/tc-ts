import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Devotion',
    'spell_frost_manarecharge',
    [
      <>
        Modifies one of your Priest racial abilities. <br />
        <br /> Human: Allows Desperate Prayer to be cast on friendly target within 30 yard range. <br />
        <br /> Dwarf: Chastise now reduces threat to the target. <br />
        <br /> Night Elf: Starshards gains an additional charge. <br />
        <br /> Troll: Allows Shadowguard to be cast on friendly targets within 30 yard range. <br />
        <br /> Undead: Devouring Plague now also return mana equal to 50% of its cost over 24 sec. <br />
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
  new Talent('Mental Strength', 'spell_nature_enchantarmor', ['Increases your Mana, Health and Spirit by ', '%.'], 5, [[2, 4, 6, 8, 10]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D2'], {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Divine Spirit', 'spell_holy_divinespirit', ['Holy power infuses the target, increasing their spirit by 17.'], 1, [[]], [{ x: 2, y: 2 }], null, '70 Mana', '30 yd range', 'Instant'),
  null,
]

export default tier5
