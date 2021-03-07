import { Talent } from "../Classes";

export default [
  [
    new Talent(
      "Improved Wrath",
      ["Reduces the cast time of your Wrath spell by", " sec."],
      5,
      [[0.1, 0.2, 0.3, 0.4, 0.5]]
    ),
    new Talent(
      "Nature's Grasp",
      [
        "While active, any time an enemy hits the caster they have a 35% chance to become afflicted by Entangling Roots. Only usable outdoors. 1 charge. Lasts 45 sec. ",
      ],
      1,
      [[1]],
      [{ x: null, y: null }],
      [{ x: 0, y: 2 }]
    ),
    new Talent(
      "Improved Nature's Grasp",
      [
        "Increases the chance for your Nature's Grasp to entangle an enemy by ",
        "%.",
      ],
      4,
      [[15, 30, 45, 65]],
      [{ x: 0, y: 1 }]
    ),
    null,
  ],
  [
    new Talent(
      "Improved Entangling Roots",
      [
        "Gives you a ",
        "% chance to avoid interruption caused by damage while casting Entangling Roots.",
      ],
      3,
      [[40, 70, 100]]
    ),
    new Talent(
      "Improved Moonfire",
      [
        "Increases the damage and critical strike chance of your Moonfire spell by ",
        "%.",
      ],
      5,
      [[2, 4, 6, 8, 10]],
      [{ x: null, y: null }],
      [{ x: 3, y: 1 }]
    ),
    new Talent(
      "Natural Weapons",
      [
        "Increases the damage you deal with physical attacks in all forms by ",
        "%.",
      ],
      5,
      [[2, 4, 6, 8, 10]],
      [{ x: null, y: null }],
      [{ x: 2, y: 2 }]
    ),
    new Talent(
      "Natural Shapeshifter",
      ["Reduces the mana cost of all Shapeshifting by ", "%."],
      3,
      [[10, 20, 30]]
    ),
  ],
  [
    new Talent(
      "Improved Thorns",
      ["Increases the damage caused by your Thorns spell by ", "%."],
      3,
      [[25, 50, 75]]
    ),
    null,
    new Talent(
      "Omen of Clarity",
      [
        "Imbues the druid with natural energy. Each of the druids melee attacks has a chance of causing the caster to enter a clearcasting state. The clearcasting state reduces the Rage, Mana or Energy cost of your next damage or healing spell or offensive ability by 100%. Lasts 10 min.",
      ],
      1,
      [[1]],
      [{ x: 1, y: 2 }]
    ),
    new Talent(
      "Nature's Reach",
      [
        "Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire and Hurricane spells by ",
        "%.",
      ],
      2,
      [[10, 20]]
    ),
  ],
  [
    null,
    new Talent(
      "Vengeance",
      [
        "Increases the critical strike damage bonus of your Starfire, Moonfire and Wrath by ",
        "%.",
      ],
      5,
      [[20, 40, 60, 80, 100]],
      [{ x: 1, y: 1 }]
    ),
    new Talent(
      "Celestial Focus",
      [
        "Gives you Starfire a ",
        "% chance to stun the target for 3 sec and increases the change you'll resist spell interruption while casting Wrath by ",
        "%.",
      ],
      3,
      [
        [5, 10, 15],
        [25, 50, 75],
      ]
    ),
    null,
  ],

  [
    new Talent(
      "Celestial Spark",
      [
        "Gives your Starfire spell a ",
        "% and your Wrath a ",
        "% chance to reset the cooldown of your Innervate.",
      ],
      2,
      [
        [1, 2],
        [0.5, 1],
      ]
    ),
    new Talent(
      "Nature's Grace",
      [
        "All spell criticals grace you with a blessing of nature, returning 25% of their mana cost and reducing the casting time of your next two spells by 0.5 sec.",
      ],
      2,
      [
        [1, 2],
        [0.5, 1],
      ],
      [{ x: null, y: null }],
      [{ x: 5, y: 1 }]
    ),
    new Talent(
      "Moonglow",
      [
        "Reduces the mana cost of your Starfire, Moonfire, Wrath, Healing Touch, Rejuvenation and Regrowth spells by ",
        "%.",
      ],
      3,
      [[3, 6, 9]]
    ),
    null,
  ],

  [
    null,
    new Talent(
      "Moonfury",
      [
        "Increases the damage done by your Starfire, Moonfire and Wrath spells by ",
        "%.",
      ],
      5,
      [[2, 4, 6, 8, 10]],
      [{ x: 4, y: 1 }]
    ),
    null,
    null,
  ],
  [
    null,
    new Talent(
      "Moonkin Form",
      [
        "Transforms the druid into Moonkin Form. While in this form the armor contribution of all items is increased by 360% and all party members within 30 yards have their spell critical strike increased by 5%. The druid can only cast Balance spells while shapeshifted.",
      ],
      1,
      [[1]]
    ),
    null,
    null,
  ],
];
