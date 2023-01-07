import { Puzzle } from '../utils/Puzzle';
import { findIntersection, getWeights } from './utils/utils';

export function one(paths: string) {
  const { puzzle } = new Puzzle(paths).parts('\n');
  return puzzle.reduce((total, line) => {
    const mid = Math.round(line.length / 2);
    const intersection = findIntersection(
      getWeights(line.substring(mid)),
      getWeights(line.substring(0, mid))
    );

    if (!intersection) {
      return total;
    }

    return total + intersection;
  }, 0);
}
