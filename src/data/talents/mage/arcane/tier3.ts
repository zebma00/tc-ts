import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Magic Attunement', 'spell_nature_abolishmagic', ['Increases the effect of your Amplify Magic and Dampen Magic spells by ', '%.'], 2, [[25, 50]]),
  new Talent('Improved Arcane Explosion', 'spell_nature_wispsplode', ['Increases the critical strike chance of your Arcane Explosion spell by ', '%.'], 3, [[2, 4, 6]]),
  new Talent('Mana Tap', 'spell_holy_dispelmagic', ['When activated, your next damaging spell returns mana equal to its cost instead.'], 1, [[]], null, null, null, null, 'Instant', '1 min cooldown', null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent(
    'Unstable Missiles',
    'spell_arcane_starfire',
    ['Casting Arcane Missiles reduces the casting time and increases the Mana cost of your Arcane Missiles by ', '%. This effect stacks up to 5 times and lasts 8 sec.'],
    2,
    [[5, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier3
