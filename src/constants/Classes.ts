export class Talent {
  x: number;
  y: number;
  name: string;
  description: string;
  value: number;
  maxValue: number;
  valueIteration: number[];
  increment() {
    if (this.value <= this.maxValue) {
      console.log(this.value);
      this.value++;
    }
  }
  decrement() {
    if (this.value >= 0) {
      console.log(this.value);
      this.value--;
    }
  }

  constructor(
    x: number,
    y: number,
    name: string,
    description: string,
    maxValue: number,
    valueIteration: number[]
  ) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.description = description;
    this.value = 0;
    this.maxValue = maxValue;
    this.valueIteration = valueIteration;
  }
}
