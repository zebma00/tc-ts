export interface GridDataType {
  description: string;
  value: number;
  maxValue: number;
  valueIteration: number[];
  increment: () => void;
  decrement: () => void;
}
