export class CalculatorService {
  private current: number;

  constructor() {
    this.current = 0;
  }

  add(num: number) {
    this.current += num;
  }

  subtract(num: number) {
    this.current -= num;
  }

  multiply(num: number) {
    this.current *= num;
  }

  divide(num: number) {
    this.current /= num;
  }

  clear() {
    this.current = 0;
  }

  equals() {
    return this.current;
  }
}
