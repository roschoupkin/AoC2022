import { Coords } from './Coords';
import { CoordinatesTuple, WindDirection } from './types';
import { WIND_DIRECTIONS } from './consts';

export class Blizzard extends Coords {
  private readonly direction: CoordinatesTuple;

  constructor(x: number, y: number, cell: WindDirection) {
    super(x, y);
    this.direction = WIND_DIRECTIONS[cell];
  }

  public readonly next = (width: number, height: number) =>
    this.update(this.get_next_x(width), this.get_next_y(height));

  private readonly get_next_x = (width: number) => {
    const dx = this.direction[0];

    const candidate = this.x + dx;
    if (candidate > 0 && candidate < width) {
      return candidate;
    }
    return candidate <= 0 ? width - 1 : 1;
  };

  private readonly get_next_y = (height: number) => {
    const dy = this.direction[1];

    const candidate = this.y + dy;
    if (candidate > 0 && candidate < height) {
      return candidate;
    }
    return candidate <= 0 ? height - 1 : 1;
  };
}
