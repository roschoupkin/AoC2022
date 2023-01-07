import { isPuzzleInput } from './guards';
import { readPuzzle } from '../../utils/puzzle';

function prepare(puzzle: [string, string]) {
  const matrix: string[][] = [];
  const steps = puzzle[1].split('\n');

  const ranges: Array<[start: number, end: number, index: number]> = [];

  const table = puzzle[0].split('\n');
  const columns = table.pop() ?? '';

  for (const match of columns.matchAll(/\d+/g)) {
    if (!match || match.index === undefined) {
      continue;
    }

    const index = Number(match[0]) - 1;

    matrix[index] = [];
    ranges[index] = [match.index - 1, match.index + 1, index];
  }

  for (const line of table) {
    for (const [start, end, index] of ranges) {
      const symbol = line.slice(start, end + 1);
      if (/[A-Z]/.test(symbol)) {
        matrix[index]?.push(symbol);
      }
    }
  }

  return { matrix, steps };
}

export function parse(paths: string) {
  const puzzle = readPuzzle(paths, '\n\n');
  if (isPuzzleInput(puzzle)) {
    return prepare(puzzle);
  }
  throw new Error('Wrong input');
}
