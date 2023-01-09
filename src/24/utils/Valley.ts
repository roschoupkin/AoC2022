import { isBlizzard } from './utils';
import { Blizzard } from './Blizzard';
import { Coords } from './Coords';

export class Valley {
  public readonly width = Number.NaN;
  public readonly height = Number.NaN;

  private readonly blizzards: Blizzard[] = [];

  private readonly bounds = new Set<string>();
  private readonly cache = new Map<number, Set<string>>();

  constructor(puzzle: string[]) {
    this.width = (puzzle[0]?.length ?? 0) - 1;
    this.height = puzzle.length - 1;

    for (let y = 0; y < puzzle.length; y++) {
      const line = puzzle[y]?.split('');
      if (!line?.length) {
        throw new Error('Wrong input');
      }

      for (let x = 0; x < line.length; x++) {
        const cell = line[x];
        if (cell === '#') {
          this.bounds.add(new Coords(x, y).key);
        }

        if (isBlizzard(cell)) {
          this.blizzards.push(new Blizzard(x, y, cell));
        }
      }
    }
  }

  public readonly inside = (coords: Coords) =>
    coords.x > 0 && coords.x < this.width && coords.y >= 0 && coords.y <= this.height;

  public readonly tick = (minutes: number) => {
    const cache = this.cache.get(minutes);
    if (cache !== undefined) {
      return cache;
    }

    const occupied = new Set(this.bounds);

    for (const blizzard of this.blizzards) {
      occupied.add(blizzard.next(this.width, this.height).key);
    }

    this.cache.set(minutes, occupied);

    return occupied;
  };
}
