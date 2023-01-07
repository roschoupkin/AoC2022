import { isPartiallyContain } from './utils/utils';
import { parse } from './utils/parse';

export function two(paths: string) {
  let response = 0;

  const puzzle = parse(paths);

  for (const [left, right] of puzzle) {
    if (isPartiallyContain(left, right) || isPartiallyContain(right, left)) {
      response++;
    }
  }

  return response;
}
