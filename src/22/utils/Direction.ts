import { Route } from './types';

export class Direction {
  public index;

  private readonly directions = [
    { x: 1, y: 0 }, // right
    { x: 0, y: 1 }, // bottom
    { x: -1, y: 0 }, // left
    { x: 0, y: -1 }, // top
  ] as const;

  public get value() {
    const value = this.directions[this.index];
    if (value) {
      return value;
    }
    throw new Error('Wrong direction key');
  }

  public get isHorizontal() {
    return [0, 2].includes(this.index);
  }

  constructor(initial: number) {
    this.index = initial;
  }

  public readonly next = (turn: Route) => {
    const size = this.directions.length - 1;
    if (turn === 'R') {
      const candidate = this.index + 1;
      this.index = candidate > size ? 0 : candidate;
    }
    if (turn === 'L') {
      const candidate = this.index - 1;
      this.index = candidate < 0 ? size : candidate;
    }
    return this;
  };
}
