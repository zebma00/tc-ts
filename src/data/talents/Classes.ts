export class Talent {
  name: string;
  description: string[];
  value: number;
  maxValue: number;
  required?: {
    x: number;
    y: number;
  };
  valueIteration: number[][];

  constructor(
    name: string,
    description: string[],
    maxValue: number,
    valueIteration: number[][],
    required?: {
      x: number;
      y: number;
    }
  ) {
    this.name = name;
    this.description = description;
    this.value = 0;
    this.maxValue = maxValue;
    this.valueIteration = valueIteration;
    this.required = required;
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
