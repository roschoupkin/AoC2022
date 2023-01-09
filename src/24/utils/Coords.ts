import { CoordinatesTuple } from './types';

export class Coords {
  private readonly position: CoordinatesTuple = [Number.NaN, Number.NaN];

  public get x(): number {
    return this.position[0];
  }

  public get y(): number {
    return this.position[1];
  }

  public get key() {
    return this.position.join(';');
  }

  constructor(x: number, y: number) {
    this.update(x, y);
  }

  public readonly update = (x: number, y: number) => {
    this.position[0] = x;
    this.position[1] = y;
    return this;
  };
}
