import { RockImplementation } from './types';

export class Rock<TShape extends number[][]> implements RockImplementation<TShape> {
  x = 0;
  y = 0;

  constructor(public readonly shape: TShape) {}

  init = (x: number, y: number) => {
    this.x = x;
    this.y = y;

    return this;
  };

  next = (x: number, y: number) => ({
    x: this.x + x,
    y: this.y + y,
    shape: this.shape,

    apply: () => {
      this.x += x;
      this.y += y;
    },
  });
}
