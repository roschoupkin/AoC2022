import { createKey } from './utils';

export class Context {
  public readonly sides = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ] as const;

  constructor(private readonly cubesSet: Set<string>) {}

  public readonly calcSurfaces = (x: number, y: number, z: number) =>
    this.sides.filter(([dx, dy, dz]) => !this.cubesSet.has(createKey(x + dx, y + dy, z + dz)))
      .length;

  public readonly calcAffected = (x: number, y: number, z: number) =>
    this.sides.length - this.calcSurfaces(x, y, z);
}
