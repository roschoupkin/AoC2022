import { findIntersection, getWeights } from './utils/utils';
import { parse } from './utils/parse';

function solution(parsed: ReturnType<typeof parse>) {
  return parsed.reduce((total, line) => {
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

export const one = (paths: string) => solution(parse(paths));
