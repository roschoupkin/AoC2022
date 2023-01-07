import { Puzzle } from '../utils/Puzzle';
import { findIntersection, getWeights } from './utils/utils';

export function two(paths: string) {
  const { puzzle } = new Puzzle(paths).parts('\n');

  let total = 0;

  for (let i = 0; i < puzzle.length; i += 3) {
    const intersection = findIntersection(
      getWeights(puzzle[i]),
      getWeights(puzzle[i + 1]),
      getWeights(puzzle[i + 2])
    );

    if (intersection) {
      total += intersection;
    }
  }

  return total;
}
