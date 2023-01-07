import { findIntersection, getWeights } from './utils/utils';
import { parse } from './utils/parse';

export function two(paths: string) {
  const puzzle = parse(paths);

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
