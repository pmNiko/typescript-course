import { powers } from "../data/powers";

export class Hero {
  private powers = powers;
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power(): string {
    return (
      this.powers.find((power) => power.id === this.powerId)?.desc ||
      "not found"
    );
  }
}

class Hero2 {
  private powers = powers;
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power(): string {
    return (
      this.powers.find((power) => power.id === this.powerId)?.desc ||
      "not found"
    );
  }
}

export default Hero2;
