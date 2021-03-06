export class Talent {
  name: string;
  description: string[];
  value: number;
  maxValue: number;
  requires: {
    x: number | null;
    y: number | null;
  }[];
  required: {
    x: number | null;
    y: number | null;
  }[];
  valueIteration: number[][];

  constructor(
    name: string,
    description: string[],
    maxValue: number,
    valueIteration: number[][],
    requires?: {
      x: number | null;
      y: number | null;
    }[],
    required?: {
      x: number | null;
      y: number | null;
    }[]
  ) {
    this.name = name;
    this.description = description;
    this.value = 0;
    this.maxValue = maxValue;
    this.valueIteration = valueIteration;
    this.requires = requires ? requires : [{ x: null, y: null }];
    this.required = required ? required : [{ x: null, y: null }];
  }
  increment() {
    if (this.value < this.maxValue) {
      this.value++;
    }
  }
  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }
}
