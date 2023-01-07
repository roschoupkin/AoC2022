import { splitPuzzle } from '../../utils/puzzle';

export function parse(paths: string) {
  const puzzle = splitPuzzle(paths, '\n');

  const matrix: number[][] = [];

  for (const row of puzzle) {
    matrix.push(row.split('').map(Number));
  }

  return matrix;
}
