import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Celestial Spark',
    'ability_druid_dreamstate',
    ['Your successful Starfire hits reduce the cooldown of your Innervate and Hurricane spells by ', ' sec.'],
    3,
    [[0.5, 1, 1.5]],
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
  new Talent(
    "Nature's Grace",
    'spell_nature_naturesblessing',
    ['All spell criticals grace you with a blessing of nature, refunding 50% of the Mana cost and reducing the casting time of your next spell by 0.5 sec.'],
    1,
    [[1]],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1'],
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent('Moonglow', 'spell_nature_sentinal', ['Reduces the mana cost of your Starfire, Moonfire, Wrath, Healing Touch, Rejuvenation and Regrowth spells by ', '%.'], 3, [[3, 6, 9]]),
  null,
]

export default tier5
