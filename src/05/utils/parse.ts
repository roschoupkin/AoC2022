import { Puzzle } from '../../utils/Puzzle';
import { isPuzzleInput } from './guards';

export class ParsePuzzle extends Puzzle {
  public readonly matrix: string[][] = [];
  public readonly ranges: Array<[start: number, end: number, index: number]> = [];

  get puzzle() {
    const { puzzle } = this.parts('\n\n');
    if (isPuzzleInput(puzzle)) {
      return puzzle;
    }
    throw new Error('Wrong input');
  }

  public readonly parse = () => {
    const table = this.puzzle[0].split('\n');
    const columns = table.pop() ?? '';

    for (const match of columns.matchAll(/\d+/g)) {
      if (!match || match.index === undefined) {
        continue;
      }

      const index = Number(match[0]) - 1;

      this.matrix[index] = [];
      this.ranges[index] = [match.index - 1, match.index + 1, index];
    }

    for (const line of table) {
      for (const [start, end, index] of this.ranges) {
        const symbol = line.slice(start, end + 1);
        if (/[A-Z]/.test(symbol)) {
          this.matrix[index]?.push(symbol);
        }
      }
    }

    return this;
  };

  public readonly run = (process: (line: string[], size: number) => string[]) => {
    const steps = this.puzzle[1].split('\n');

    for (const step of steps) {
      const match = step.match(/move (\d+) from (\d+) to (\d+)/) ?? [];
      const [, size, from, to] = match.map((v) => (/\d+/.test(v) ? Number(v) - 1 : null));

      if (size == null || from == null || to == null) {
        continue;
      }

      this.matrix[to]?.unshift(...process(this.matrix[from] ?? [], size));
    }

    return this;
  };
}
