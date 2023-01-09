import { Directions, Position } from './types';
import { DIRECTIONS_DICT } from './consts';

export class Elf {
  private readonly history: Position[] = [];

  public get current(): Position {
    return this.history[this.history.length - 1] ?? this.initial;
  }

  private get previous(): Position | [] {
    return this.history[this.history.length - 2] ?? [];
  }

  public get didNotMove() {
    return this.current[0] === this.previous[0] && this.current[1] === this.previous[1];
  }

  constructor(private readonly initial: Position) {
    this.history.push(initial);
  }

  public readonly candidate = (key?: Directions) => {
    const next = key ? this.next(key) : this.current;
    return {
      value: next,
      apply: () => {
        this.history.push(next);
      },
    };
  };

  public readonly next = (key: Directions): Position => {
    const [x, y] = DIRECTIONS_DICT[key];
    const [cx = 0, cy = 0] = this.current;
    return [cx + x, cy + y];
  };
}
