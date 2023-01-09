import { Rock } from './Rock';
import { Coords, RockImplementation } from './types';

export class Area {
  rocks = 0;
  floor = 0;
  columns = 7;

  reserved = new Map();

  get size() {
    return this.floor + this.reserved.size;
  }

  freeze = (rock: Rock<number[][]>) => {
    for (let y = 0; y < rock.shape.length; y++) {
      const row = rock.shape[y];
      if (row === undefined) {
        continue;
      }

      for (let x = 0; x < row.length; x++) {
        const value = row[x];
        if (value !== undefined && value > 0) {
          const ry = y + rock.y;
          const rx = x + rock.x;

          const reserved_y = this.reserved.get(ry)?.entries();
          const updated = new Map(reserved_y).set(rx, value);

          if (updated.size === this.columns) {
            this.cleanup(ry);
          }

          this.reserved.set(ry, updated);
        }
      }
    }

    this.rocks++;
  };

  inside = (rock: RockImplementation<number[][]>) =>
    rock.x >= 0 && rock.x + (rock.shape[0] ?? []).length <= this.columns;

  valid = (rock: RockImplementation<number[][]>) => {
    return rock.shape.every((row, sy) => {
      return row.every((value, sx) => {
        const r = { x: rock.x + sx, y: rock.y + sy };
        const valid = !this.isFloor(r) && !this.hasRock(r);
        return value === 0 || valid;
      });
    });
  };

  isFloor = ({ y }: Pick<Coords, 'y'>) => y < this.floor;
  hasRock = ({ x, y }: Coords) => !!this.reserved.get(y)?.has(x);

  cleanup = (floor: number) => {
    this.floor = floor;
    for (let y = 0; y < floor; y++) {
      this.reserved.delete(y);
    }
  };
}
