import { findIntersection, getWeights } from './utils/utils';
import { parse } from './utils/parse';

function solution(parsed: ReturnType<typeof parse>) {
  let total = 0;

  for (let i = 0; i < parsed.length; i += 3) {
    const intersection = findIntersection(
      getWeights(parsed[i]),
      getWeights(parsed[i + 1]),
      getWeights(parsed[i + 2])
    );

    if (intersection) {
      total += intersection;
    }
  }

  return total;
}

export const two = (paths: string) => solution(parse(paths));
