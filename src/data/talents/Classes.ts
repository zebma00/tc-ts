export class Talent {
  name: string
  icon: string
  description: string[]
  value: number
  maxValue: number
  requires: {
    x: number | null
    y: number | null
  }[]
  required: {
    x: number | null
    y: number | null
  }[]
  valueIteration: number[][]
  manaCost: string | null
  range: string | null
  castTime: string | null
  cooldown: string | null

  constructor(
    name: string,
    icon: string,
    description: string[],
    maxValue: number,
    valueIteration: number[][],
    requires?:
      | {
          x: number | null
          y: number | null
        }[]
      | null,
    required?:
      | {
          x: number | null
          y: number | null
        }[]
      | null,
    manaCost?: string | null,
    range?: string | null,
    castTime?: string | null,
    cooldown?: string | null
  ) {
    this.name = name
    this.icon = icon
    this.description = description
    this.value = 0
    this.maxValue = maxValue
    this.valueIteration = valueIteration
    this.requires = requires ? requires : [{ x: null, y: null }]
    this.required = required ? required : [{ x: null, y: null }]
    this.manaCost = manaCost ? manaCost : null
    this.range = range ? range : null
    this.castTime = castTime ? castTime : null
    this.cooldown = cooldown ? cooldown : null
  }
  increment() {
    if (this.value < this.maxValue) {
      this.value++
    }
  }
  decrement() {
    if (this.value > 0) {
      this.value--
    }
  }
}
